import source from '../data/copy.md?raw';

export type CopySection = {
  label: string;
  title?: string;
  lead?: string;
  paragraphs: string[];
  items: { title?: string; text: string }[];
  ctas: string[];
  notes: string[];
};

const clean = (value: string) =>
  value
    .trim()
    .replace(/\*\*/g, '')
    .replace(/\[(Placeholder[^\]]*)\]/g, '[$1]');

export function getCopyPage(code: string) {
  const blocks = source.split(/^## /m).slice(1);
  const block = blocks.find((entry) => entry.startsWith(code));
  if (!block) throw new Error(`Copy não encontrada: ${code}`);

  const [, ...bodyParts] = block.split(/^### /m);
  const sections: CopySection[] = bodyParts.map((part) => {
    const [label, ...rawLines] = part.split('\n');
    const result: CopySection = {
      label: clean(label),
      paragraphs: [],
      items: [],
      ctas: [],
      notes: []
    };

    let collectingList = false;
    let pendingQuestion: string | undefined;
    for (const raw of rawLines) {
      const line = raw.trim();
      if (!line || line === '---') continue;
      const standaloneQuestion = line.match(/^\*\*(.+\?)\*\*$/);
      if (standaloneQuestion) {
        pendingQuestion = clean(standaloneQuestion[1]);
        collectingList = false;
        continue;
      }
      const field = line.match(/^\*\*(.+?):\*\*\s*(.*)$/);
      if (field) {
        const key = field[1];
        const value = clean(field[2]);
        collectingList = false;
        if (/^(H1|Título \(H1\))$/.test(key)) result.title = value;
        else if (/^(Subtítulo|Linha de apoio)$/.test(key)) result.lead = value;
        else if (key === 'Título') result.title = value;
        else if (/^CTA/.test(key)) result.ctas.push(...value.split(' | '));
        else if (key === 'Elemento') continue;
        else if (/^(Texto|Missão|Visão|Nota)$/.test(key)) {
          result.paragraphs.push(key === 'Texto' ? value : `${key}: ${value}`);
        } else if (/^(Selo|Selo de apoio)$/.test(key)) result.notes.push(value);
        else if (value) result.items.push({ title: key, text: value });
        else result.title ??= clean(key);
        continue;
      }

      if (line.startsWith('- ')) {
        collectingList = true;
        const value = clean(line.slice(2));
        const divider = value.indexOf(' — ');
        result.items.push(
          divider > -1
            ? { title: value.slice(0, divider), text: value.slice(divider + 3) }
            : { text: value }
        );
        continue;
      }

      if (/^(Grid|Cada card|Lista:|Elemento:|Formulário|Campos|Card do médico|Obs\.:)/.test(line)) {
        continue;
      }
      if (/^\d+\.\s/.test(line)) {
        const value = clean(line.replace(/^\d+\.\s*/, ''));
        const divider = value.indexOf(' — ');
        result.items.push(
          divider > -1
            ? { title: value.slice(0, divider), text: value.slice(divider + 3) }
            : { text: value }
        );
      } else if (!collectingList) {
        if (pendingQuestion) {
          result.items.push({ title: pendingQuestion, text: clean(line) });
          pendingQuestion = undefined;
        } else {
          result.paragraphs.push(clean(line));
        }
      }
    }
    return result;
  });

  return sections;
}

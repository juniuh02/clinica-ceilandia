import { defineConfig } from 'astro/config';

const [githubOwner = '', githubRepository = ''] = (process.env.GITHUB_REPOSITORY || '').split('/');
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === 'true' && Boolean(githubRepository);
const isUserOrOrganizationPage = githubRepository.toLowerCase() === `${githubOwner.toLowerCase()}.github.io`;
const githubBase = isGitHubPagesBuild && !isUserOrOrganizationPage ? `/${githubRepository}` : '/';
const githubSite = isGitHubPagesBuild
  ? `https://${githubOwner}.github.io${githubBase === '/' ? '' : githubBase}`
  : 'https://clinicaceilandia.com.br';

export default defineConfig({
  site: process.env.SITE_URL || githubSite,
  base: process.env.BASE_PATH || githubBase,
  trailingSlash: 'always',
  build: { format: 'directory' },
  vite: { server: { fs: { strict: true } } }
});

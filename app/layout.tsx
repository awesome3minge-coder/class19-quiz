import type { Metadata } from 'next';
import './globals.css';

const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000');

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: '19班刷题册',
  description: '由重点整理资料生成的选择题练习、错题回顾与重刷工具。',
  openGraph: {
    title: '19班刷题册',
    description: '把重点，刷成得分点。支持单选、多选、答案原文与错题重刷。',
    images: [{ url: '/og.png', width: 1731, height: 909, alt: '19班刷题册' }],
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '19班刷题册',
    description: '把重点，刷成得分点。支持单选、多选、答案原文与错题重刷。',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}

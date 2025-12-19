import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula as theme } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { toast } from 'react-toastify';

import Image from 'next/image';

import { RiFileCopy2Fill } from '@remixicon/react';

import parse, { DOMNode, Element, HTMLReactParserOptions } from 'html-react-parser';

interface RenderContentProps {
  htmlString: string;
}

export default function RenderContent({ htmlString }: RenderContentProps) {
  const transform: HTMLReactParserOptions['replace'] = (node: DOMNode) => {
    // فقط زمانی که node از نوع <pre><code> باشه
    if (node instanceof Element && node.name === 'pre' && node.children?.[0]) {
      const codeNode = node.children[0] as Element;

      if (codeNode.name === 'code') {
        const className = codeNode.attribs?.class || '';
        const language = className.replaceAll('language-plaintext', '').match(/language-(\w+)/)?.[1] || 'plaintext';

        // متن داخل <code>
        const rawCode = (codeNode.children || [])
          .map((c) => ('data' in c ? c.data || '' : ''))
          .join('')
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&amp;/g, '&')
          .trim();

        // رندر تمیز با react-syntax-highlighter
        return (
          <div
            className='relative z-[2] my-6 overflow-hidden rounded-2xl bg-surfaceSecondary text-sm shadow-xl shadow-accent-purple/5 xl:mx-12'
            dir='ltr'
          >
            <span className='absolute rounded-br-lg bg-background px-2 text-lg font-semibold uppercase italic'>
              {language}
            </span>
            <div className='absolute bottom-5 end-4 z-[1] aspect-square w-24 select-none opacity-10'>
              <Image fill src='/images/logo.svg' alt='masoud logo' />
            </div>
            <div
              onClick={() =>
                navigator.clipboard.writeText(rawCode).then(() => toast.success('text copied!', { toastId: language }))
              }
              className='absolute right-2 top-2 cursor-pointer rounded-md bg-background p-1 transition-colors hover:bg-surfaceSecondary hover:text-white'
            >
              <RiFileCopy2Fill size='1.25rem' />
            </div>
            <SyntaxHighlighter
              language={language}
              style={theme}
              showLineNumbers
              wrapLines
              wrapLongLines
              customStyle={{ paddingTop: '2rem', zIndex: 3, background: '#011221' }}
            >
              {rawCode}
            </SyntaxHighlighter>
          </div>
        );
      }
    }
    return undefined;
  };

  // پارس کردن HTML و جایگزین کردن codeblock‌ها
  return <>{parse(htmlString, { replace: transform })}</>;
}

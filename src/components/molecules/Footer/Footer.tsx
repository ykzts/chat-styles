import React, { FC, ReactElement } from 'react'

const Footer: FC = (): ReactElement => {
  return (
    <footer className="bg-gray-100 text-gray-700 text-sm mt-12 px-4 py-6">
      <ul className="list-none m-0 p-0 leading-6">
        <li className="m-0 p-0 text-right">
          {'Inspired by '}
          <a
            href="https://chatv2.septapus.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            Chat v2.0 Style Generator
          </a>
        </li>
        <li className="m-0 p-0 text-right">
          {'Created by '}
          <a
            href="https://ykzts.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            Yamagishi Kazutoshi
          </a>
        </li>
        <li className="m-0 p-0 text-right">
          {'Designed by '}
          <a
            href="https://7-nana.bio/"
            rel="noopener noreferrer"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            7_nana
          </a>
        </li>
        <li className="m-0 p-0 text-right">
          <a
            href="https://github.com/ykzts/chat-styles"
            rel="noopener noreferrer"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            Source code
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer

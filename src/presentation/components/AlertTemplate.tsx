import React from 'react';

import { AiFillCheckCircle, AiFillInfoCircle, AiFillExclamationCircle } from 'react-icons/ai';
import { HiX } from 'react-icons/hi';
import tw from 'twin.macro';

export default function AlertTemplate({ style, options, message, close }) {
  return (
    <div
      style={style}
      css={[
        tw`bg-white rounded-lg border-t-2 sm:border-l-2 sm:border-t-0 flex items-center space-x-4 px-4 py-4 shadow-lg`,
        options.type === 'info' && tw`border-blue-500`,
        options.type === 'success' && tw`border-green-500`,
        options.type === 'error' && tw`border-red-500`,
      ]}
    >
      {options.type === 'info' && <AiFillInfoCircle tw="h-4 w-4 text-blue-500 flex-shrink-0" />}
      {options.type === 'success' && <AiFillCheckCircle tw="h-4 w-4 text-green-500 flex-shrink-0" />}
      {options.type === 'error' && <AiFillExclamationCircle tw="h-4 w-4 text-red-500 flex-shrink-0" />}
      <div tw="w-full">
        <div tw="font-medium leading-tight text-gray-700">
          {options.type === 'info' && 'Info'}
          {options.type === 'success' && 'Success'}
          {options.type === 'error' && 'Error'}
        </div>
        <div tw="text-xs leading-tight text-gray-500">{message}</div>
      </div>
      <button onClick={close} tw="active:transform active:scale-125">
        <HiX tw="h-4 w-4 text-gray-500" />
      </button>
    </div>
  );
}

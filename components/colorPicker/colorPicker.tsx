import React from 'react';
import * as Popover from '@radix-ui/react-popover';
import { MixerHorizontalIcon, Cross2Icon } from '@radix-ui/react-icons';



export default function colorPicker() {
    return <Popover.Root>
      <Popover.Trigger asChild>
        <button className="IconButton" aria-label="Pick Color">
          <MixerHorizontalIcon />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="rounded p-6 bg-white shadow-sm will-change-transform w-64" sideOffset={5}>
        <div className='space-y-3'>
            <div className='w-full h-16 bg-yellow-300 rounded'/>
            <div className='grid grid-cols-8 gap-3'>
                {
                    Array(32).fill(0).map((_, index)=> <div className='w-5 h-5 bg-yellow-100 border rounded'/>)
                }
            </div>
        </div>
    
          <Popover.Close className="h-6 w-6 rounded-full flex items-center justify-center absolute top-1 right-1" aria-label="Close">
            <Cross2Icon />
          </Popover.Close>
          <Popover.Arrow className="fill-white" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>}
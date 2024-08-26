export default function ContactMe() {
  return (
    <div className='flex h-full'>
      <div className='w-[10%] border-e border-line'>a</div>
      <div className='flex w-[45%] flex-col items-center justify-center gap-5 border-e border-line'>
        <input type='text' placeholder='Name' className='w-2/3' />
        <input type='text' placeholder='email' className='w-2/3' />
        <textarea placeholder='msg' className='w-2/3' />
        <button className='w-2/3 rounded-md bg-accent-blue px-4 py-2 text-tPrimary'>Send</button>
      </div>
      <div className='w-[45%]'>c</div>
    </div>
  );
}

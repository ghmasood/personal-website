import { LangsT } from 'locale/dictionaries';

type Params = Promise<{ lang: LangsT; blogSlug: string }>;

async function BlogSinglePage(props: { params: Params }) {
  const slug = (await props.params).blogSlug;
  return <div className='text-tPrimary' dangerouslySetInnerHTML={{ __html: content_en }}></div>;
}

export default BlogSinglePage;

const content_fa =
  '<p class="p1" dir="rtl"><span style="color:#ef5350;font-size:22px;"><strong>سلام به همه رفقا!</strong></span></p><p class="p2" dir="rtl">&nbsp;</p><p class="p1" dir="rtl">خیلی خوشحالم که توی اولین پست وبلاگم کنار هم هستیم. راستش مدت\u200cها بود که دوست داشتم جایی داشته باشم تا هر چی توی دنیای وب یاد گرفتم رو با شما به اشتراک بذارم. بالاخره تصمیم گرفتم این سایت رو راه بندازم!</p><p class="p2" dir="rtl">&nbsp;</p><p class="p1" dir="rtl">اینجا قراره از کلی تجربه\u200cها و نکات کاربردی حرف بزنیم؛ از طراحی سایت گرفته تا توسعه و هر چیزی که مربوط به وب باشه. دوست دارم توی این مسیر، با هم یاد بگیریم و حتی از همدیگه ایده و تجربه بگیریم. به نظرم، رشد و پیشرفت توی این حوزه وقتی لذت\u200cبخش\u200cتر میشه که جمعی باشه و بتونیم کمک\u200cحال همدیگه باشیم.</p><p class="p2" dir="rtl">&nbsp;</p><p class="p1" dir="rtl">حرف زیاده ولی از شما هم خیلی مشتاقم بشنوم. پس حتماً نظرات، سوالات و تجربه\u200cهای خودتون رو توی بخش کامنت\u200cها باهام در میون بذارید. بیاید با هم به دنیای وب بیشتر وارد بشیم و جلو بریم!</p>';
const content_en =
  '<p class="p1"><span style="background-color:#b71c1c;font-size:22px;"><strong>Hey everyone!</strong></span></p><p class="p2">&nbsp;</p><p class="p1">I’m super excited to have you here for my very first blog post. Honestly, I’ve been wanting to create a space where I can share everything I’ve learned about the web with you all, and finally, here it is!</p><p class="p2">&nbsp;</p><p class="p1">This blog is where we’ll talk about all kinds of stuff – from web design to development and everything in between. I hope we can learn from each other, share ideas, and grow together. In my opinion, progress in this field is way more fun when it’s a group effort, and we can help each other out.</p><p class="p2">&nbsp;</p><p class="p1">There’s a lot to talk about, but I’m also eager to hear from you. So don’t be shy, drop your thoughts, questions, and experiences in the comments. Let’s dive deeper into the world of the web and make progress together!</p><p class="p2">&nbsp;</p><p class="p1">This version keeps a casual and friendly tone while encouraging interaction and shared learning.</p>';

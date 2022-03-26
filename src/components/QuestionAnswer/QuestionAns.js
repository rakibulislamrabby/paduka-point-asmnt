import React from 'react';

const QuestionAns = () => {
    return (
        <div className='mb-5 text-start'>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            How to React Works?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">

                            <p className=''>
                                ReactJS হল মোবাইল এবং ওয়েব অ্যাপ্লিকেশন ডেভেলপমেন্টের জন্য সবচেয়ে জনপ্রিয় জাভাস্ক্রিপ্ট লাইব্রেরিগুলির মধ্যে একটি। এটি Facebook  তৈরি করেছে।
                            </p>
                            <p><b>JSX</b></p>
                            <p>JSX হল একটি জাভাস্ক্রিপ্ট সিনট্যাক্স এক্সটেনশন যা রেস্পন্সিভ এলিমেন্ট  তৈরিতে ব্যবহৃত হয়। ডেভেলপার রা  জাভাস্ক্রিপ্ট অবজেক্টে এইচটিএমএল কোড এম্বেড করার জন্য এটি ব্যবহার করে। যেহেতু JSX valide জাভাস্ক্রিপ্ট এক্সপ্রেশন এবং ফাংশন এমবেডিং গ্রহণ করে,তাই এটি জটিল Code structure কে সহজ করতে পারে।</p>

                            <p><b>Virtual DOM</b></p>
                            <p>JSX হল একটি javascript Sytext extention যা রেস্পন্সিভ এলিমেন্ট  তৈরিতে ব্যবহৃত হয়। ডেভেলপার রা  জাভাস্ক্রিপ্ট অবজেক্টে এইচটিএমএল কোড এম্বেড করার জন্য এটি ব্যবহার করে। যেহেতু JSX বৈধ জাভাস্ক্রিপ্ট এক্সপ্রেশন এবং ফাংশন এমবেডিং গ্রহণ করে, এটি জটিল কোড কাঠামোকে সহজ করতে পারে।</p>
                            <p><b>Components and Props</b></p>
                            <p>ReactJS তার কোড সহজ ও reuse এর জন্য ছোট ছোট structure এ ভাগ করে যাকে Components বলা হয়। এবং প্রতিটা components এক এক টা element Return করে। ডেভেলপার দের কাজ সহজ ও দ্রুত করার জন্য ReactJS খুব ভালো অবদান রাখছে।</p>

                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Props vs State
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <h3>Props</h3>
                            <ul>
                                <li>Props শুধু Read করা যায়। </li>
                                <li>Props হচ্ছে immutable</li>
                                <li>Props একটা argument এর মাধ্যমে একটি component থেকে আর একটি component এর মধ্যে ডাটা pass করে। </li>
                                <li>Props উপাদানগুলিকে পুনরায় ব্যবহারযোগ্য করে তোলে।</li>
                            </ul>
                            <h3>State</h3>
                            <ul>
                                <li>State asynchronous ভাবে change করতে পারে </li>
                                <li>State হচ্ছে Mutable</li>
                                <li>State Component এর থেকে information hold করতে পারে।  </li>
                                <li>State component গুলো reusable করতে পারে নাহ। </li>
                            </ul>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default QuestionAns;
import React from 'react';

const Blogs = () => {
    return (
        <div className='md:mx-20 mx-5 my-20'>
            <div className='p-2'>
                <h1 className='text-2xl my-4 font-semibold'>What is Context API ?</h1>
                <p><span className='text-xl font-semibold text-pink-500 underline mr-2'>Ans: <br /></span> The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application. Context provides a way to pass data through the component tree without having to pass props down manually at every level. In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cubersome for certain types of props that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree. To start with the Context API, the first thing we need to do is create a context using the createContext function from React. The createContext function accepts an initial value, but this initial value is not required. After creating your context, that context now has two React components that are going to be used: Provider and Consumer.The Provider component is going to be used to wrap the components that are going to have access to our context.The Provider component receives a prop called value, which can be accessed from all the components that are wrapped inside Provider, and it will be responsible to grant access to the context data. After you wrap all the components that are going to need access to the context with the Provider component, you need to tell which component is going to consume that data. The Consumer component allows a React component to subscribe to the context changes. The component makes the data available using a render prop.The useContext hook allows us to connect and consume a context. The useContext hook receives a single argument, which is the context that you want to have access to.</p>
            </div>
            <div className='p-2'>
                <h1 className='text-2xl my-4 font-semibold'>What is Semantic tag ?</h1>
                <p><span className='text-xl font-semibold text-pink-500 underline mr-2'>Ans: <br /></span> A semantic element clearly describes its meaning to both the browser and the developer. <br />Examples of non-semantic elements: div and span - Tells nothing about its content. <br /> Examples of semantic elements: form, table, and article - Clearly defines its content.<br /> It has greater accessibility. You are not the only one that finds semantic elements easier to understand. Search engines and assistive technologies (like screen readers for users with a sight impairment) are also able to better understand the context and content of your website, meaning a better experience for your users.</p>
            </div>
            <div className='p-2'>
                <h1 className='text-2xl my-4 font-semibold'>Difference among block, inline and inline-block element.</h1>
                <p><span className='text-xl font-semibold text-pink-500 underline mr-2'>Ans: <br /></span></p>
                <h1 className='font-semibold underline'>Block element</h1>
                <section>A block-level element always starts on a new line and takes up the full width available.
                    A block level element has a top and a bottom margin, whereas an inline element does not.
                    Take a line break after end of the element.
                    The div element is a block-level element.
                </section>
                <h1 className='font-semibold underline'>Inline element</h1>
                <section>
                    An inline element does not start on a new line.
                    An inline element only takes up as much width as necessary.
                    This is a span element inside a paragraph.
                    Can’t allows to set a width and height on the element.

                    Note: An inline element cannot contain a block-level element!

                    Inline Element এর width এবং Height যতটুকো প্রয়োজন হয় ততটুকু নেয় । তারমানে হলো ওই Inline Element এ Default ভাবে যে Width এবং Height দেওয়া থাকে সেটাই নিবে । আমরা যদি Width এবং Height এর value 500px করে সেট করি তবুও সে তার Default ভাবে যা থাকে তাই নিবে ।
                    Inline Element এর Default ভাবে কোন Padding(top,right,bottom,left কোনদিকেই ) থাকেনা । আমরা যা সেট করব তাই হবে ।
                    Inline Element এর Default ভাবে কোন Margin(top,right,bottom,left কোনদিকেই ) থাকেনা । কিন্তু যখন আমরা Margin দেই তখন শুধু Left and Right এ Margin নিবে Top and Bottom Margin নিবেনা কারণ  এইটা Default ভাবে 0 সেট করা আছে ।
                </section>
                <h1 className='font-semibold underline'>Inline-block element</h1>
                <section>
                    Allows to set a width and height on the element.
                    Top and Bottom এ Margin and Padding নিবে, যা Inline and Block Element এর মধ্যে নেয়না ।
                    display:Inline-block মানে হলো সেই Element টা Inline এ থাকবে But Block Element এর যত CSS Property আছে সবগুলোই ব্যবহার করা যাবে । Example: Top and Bottom Margin নিবে height and width ও নিবে ।
                    Does not add a line-break after the element, so the element can sit next to other elements. Whereas the Block element take a line-break after the element.

                </section>
            </div>
        </div>
    );
};

export default Blogs;
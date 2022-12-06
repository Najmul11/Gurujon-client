import React from 'react';
import { Accordion } from 'flowbite-react';

const Blog = () => {
    return (
        <div className='container mx-auto mt-10'>
            <h1 className='text-3xl font-semibold text-center mb-6'>We need SCIC .....okay??</h1>
            <Accordion className='lg:w-1/2 mx-auto '>
                <Accordion.Panel>
                    <Accordion.Title className='h-10'>what is cors?</Accordion.Title>
                    <Accordion.Content>
                        <p>Cross-Origin Resource Sharing(cors), Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.
                        </p>
                        <p>simply if we are accessing api from different domain, we need cors.</p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title className='h-10'>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Title>
                    <Accordion.Content>
                        <p>I am using firebase to implement authentication system on application. With firebase it has become so easy.</p>
                        <p>We have many more option to implement authentication rather than firebase</p>
                        <li>OneLogin</li>
                        <li>Okta</li>
                        <li>Auth0</li>
                        <li>Supabase</li>
                        <li>Authress etc.</li>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title className='h-10'>How does the private route work?</Accordion.Title>
                    <Accordion.Content>
                        <p>Private route in react is nothing but a component wrapped inside parent component as child. The child component is conditional with user interaction. if user logged in it will show the child component else will redirect to the login page</p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title className='h-10'>What is Node? How does Node work?</Accordion.Title>
                    <Accordion.Content>
                        <p>Node is server environment for javascriptp</p>
                        <p>Node js is a javascript runtime, that helps us to run javascript code on the server-side. It helps us to build largely scalable network applications. Unlike other models, node is single-threaded. So, whatever request comes to the application, it is handled by just one thread</p>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
    );
};

export default Blog;
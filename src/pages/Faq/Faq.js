import React from 'react';
import { Accordion } from 'flowbite-react';


const Faq = () => {
    return (
        <div className='container mx-auto mt-10'>
            <h1 className='text-3xl font-semibold text-center mb-6'>Frequently asked questions</h1>
            <Accordion className='lg:w-1/2 mx-auto '>
                <Accordion.Panel>
                    <Accordion.Title className='h-10'>Do you have course on Mentalism?</Accordion.Title>
                    <Accordion.Content>
                        <p>No we dont have it.</p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title className='h-10'>Will I be prepared for job after finishing course?</Accordion.Title>
                    <Accordion.Content>
                        <p>Yes most likely if you work hard.</p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title className='h-10'>Do you provide support?</Accordion.Title>
                    <Accordion.Content>
                        <p>Yes, everyday at 12.00.</p>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
    );
};

export default Faq;
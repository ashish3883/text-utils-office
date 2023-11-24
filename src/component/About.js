import React from 'react'

export default function About(props) {
    return (
        <div>
            <h1 className={`text-${props.mode === 'dark' ? "light" : "dark"}`}>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={{backgroundColor:props.mode==='dark'?"#132849":"white", color:props.mode==='dark'?"white":"black"}}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor:props.mode==='dark'?"#212529":"white", color:props.mode==='dark'?"white":"black"}}>
                            Our Mission
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Our mission is to empower users with intuitive and efficient text utilities.</strong> Whether you're a writer, student, programmer, or anyone working with text, we aim to be your one-stop solution for various text-related tasks. From formatting and analyzing to generating and transforming text, we've got the tools you need.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{backgroundColor:props.mode==='dark'?"#132849":"white", color:props.mode==='dark'?"white":"black"}}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor:props.mode==='dark'?"#212529":"white", color:props.mode==='dark'?"white":"black"}}>
                            Why Choose Text-Utils?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Versatility:</strong>Text-Utils offers a wide range of text utilities to cater to diverse needs. From word counting to text summarization, we provide tools that simplify your tasks.
                        </div>
                        <div className="accordion-body">
                            <strong>User-Friendly Interface:</strong>We believe in keeping things simple. Our user interface is designed to be intuitive, ensuring that you can accomplish your tasks without a steep learning curve.
                        </div>
                        <div className="accordion-body">
                            <strong>Accessibility:</strong>Whether you're using a desktop, laptop, tablet, or smartphone, Text-Utils is accessible on various devices and browsers. Enjoy the convenience of our tools wherever you are.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{backgroundColor:props.mode==='dark'?"#132849":"white", color:props.mode==='dark'?"white":"black"}}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{backgroundColor:props.mode==='dark'?"#212529":"white", color:props.mode==='dark'?"white":"black"}}>
                            Our Commitment to Excellence
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p><strong> At Text-Utils,</strong> we are dedicated to providing you with a seamless and efficient text utility experience. Our commitment to excellence extends to our customer support – we're here to assist you with any questions or concerns.</p>

                            <p>Thank you for choosing Text-Utils for your text utility needs. We are excited to be part of your journey in making text-related tasks simpler and more enjoyable.</p>

                            <p>For inquiries, suggestions, or assistance, please don't hesitate to reach out:</p>

                            <p>Email: ashishkumar3883@gmail.com</p>
                            <p>Phone: 9899274621</p>
                            <p>Join us on this adventure of transforming the way you interact with text.</p>

                            <p>Sincerely,</p>

                            <p>Ashish Kumar Verma</p>
                            <p>Founder, Text-Utils</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

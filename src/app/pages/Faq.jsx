import React from "react";

const Accordion = () => {
  return (
      <section id="Faq" className="bg-[#1E5AF9] dark:text-black h-screen flex py-8 items-center flex justify-center ">
            <div className="container  flex-col   md:p-8">
                <h2 className="text-2xl font-semibold sm:text-4xl text-center text-white">Frequently Asked Questions</h2>
                <p className="mt-4 mb-8 text-white text-center">Sagittis tempor donec id vestibulum viverra. Neque condimentum primis orci at lacus amet bibendum.</p>
                <div className="flex  justify-center px-8">

                    <div className="space-y-4">
                        <details className=" border border-blue-700 bg-white shadow-md rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">Ex orci laoreet egestas sapien magna egestas scelerisque?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Lectus iaculis orci metus vitae ligula dictum per. Nisl per nullam taciti at adipiscing est. </p>
                        </details>
                        <details className="bg-white border border-blue-700 border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">Lorem at arcu rutrum viverra metus sapien venenatis lobortis odio?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna porttitor egestas tincidunt neque vehicula potenti. </p>
                        </details>
                        <details className="bg-white border border-blue-700 border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">Eleifend feugiat sollicitudin laoreet adipiscing bibendum suscipit erat?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Justo libero tellus integer tincidunt justo semper consequat venenatis aliquet imperdiet. Ultricies urna proin fusce nulla pretium sodales vel magna et massa euismod vulputate sed. </p>
                        </details>
                        <details className="bg-white border border-blue-700 border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri">Eleifend feugiat sollicitudin laoreet adipiscing bibendum suscipit erat?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Justo libero tellus integer tincidunt justo semper consequat venenatis aliquet imperdiet. Ultricies urna proin fusce nulla pretium sodales vel magna et massa euismod vulputate sed. </p>
                        </details>
                    </div>
                </div>
            </div>
             <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
           <script>
           AOS.init();
           </script>
</section>

     
  );
};

export default Accordion;



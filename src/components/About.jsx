import React from 'react'

const About = () => {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="">
            <h2 className="text-3xl font-bold sm:text-4xl xxs:flex xxs:justify-center">
              About Us
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 bg-yellow-300">
            <div className="xxs:h-[40rem] xs:h-[25rem] md:h-[27rem] sm:h-80 lg:h-full bg-green-200 items-center flex justify-center">
              <img
                alt="/"
                src="http://hedgecockcentre.org.uk/wp-content/uploads/2021/10/WhatsApp-Image-2020-07-14-at-15.49.55-2-350x350.jpeg"
                className="rounded-xl shadow-xl"
              />
            </div>

            <div className="lg:py-16">
              <article className="space-y-4 text-gray-600">
                <p>
                  Hedgecock Community Centre (HCC) is a voluntary community organisation established within the Longbridge Ward, Upney, Barking & Dagenham in February 2017. HCC is a community-led organisation, with a strong ethos and an emphasis on engaging and involving local people. HCC recognises that local people are a valuable resource and key to running a successful centre.
                </p>

                <p>
                  Our vision is to be a pioneering centre which is seen as a role model that other centres aspire to. World class service provider to the local community. Best delivery of services for the community where people will be benefited and enjoy to be part of the wider community. Hedgecock Community Centre to be the flagship community centre for London. We will be promoting Multiculturalism and integration of all communities by creating coming together events.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
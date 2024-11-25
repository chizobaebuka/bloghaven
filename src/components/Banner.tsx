import Image from 'next/image'
import bannerImg from '@/assets/banner.jpg'
import { Button } from './ui/button'

const Banner = () => {
    return (
        <section className="bg-gray-100 py-8">
            <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 items-center gap-8 mx-auto px-4 sm:px-6 lg:px-8">
                {/* div for images */}
                <div className='w-full'>
                    <Image
                        src={bannerImg}
                        alt="Picture of the author"
                        placeholder='blur'
                        className='w-full h-auto object-cover rounded-md'
                        width={1920}
                        height={500}
                        layout="responsive"
                    />
                </div>


                {/* content div */}
                <div className='flex flex-col space-y-4'>
                    <h4 className='text-sm font-medium text-gray-500'>Technology</h4>
                    <h2 className='text-2xl font-bold text-gray-900'>OpenAI Is Growing Fast And Burning Through Piles of Money</h2>
                    <p className="mt-2 text-sm text-gray-700">
                        OpenAI, a leader in artificial intelligence, is experiencing rapid growth but at a cost. The company has been
                        scaling its operations and advancing its technology while navigating the financial challenges associated with
                        such rapid expansion. <br /> <br /> Experts predict it may shape the future of AI, but its path forward will depend heavily
                        on how it manages its resources and investments.
                    </p>

                    <Button variant='default'>Read More</Button>
                </div>
            </div>
        </section>
    )
}

export default Banner
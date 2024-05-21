export default function Footer () {
    return <>
        <div className='max-h-svh bg-blue-800'>
            <div className='md:flex justify-between p-8'>
                <div>
                    <img className='h-10 rounded-lg' src="ss.png" alt="" />
                    <p className='text-white'>email@barunamuda.com</p>
                    <div className='flex gap-4 mt-10'>
                    <svg className='w-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" id="Google"><path d="M896 786h725q12 67 12 128 0 217-91 387.5T1282.5 1568 896 1664q-157 0-299-60.5T352 1440t-163.5-245T128 896t60.5-299T352 352t245-163.5T896 128q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65T484 652.5 420 896t64 243.5T657.5 1316t238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78H896V786z" fill="#ffffff" className="color000000 svgShape"></path></svg>
                    <svg className='w-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" id="Facebook"><path d="M1376 128q119 0 203.5 84.5T1664 416v960q0 119-84.5 203.5T1376 1664h-188v-595h199l30-232h-229V689q0-56 23.5-84t91.5-28l122-1V369q-63-9-178-9-136 0-217.5 80T948 666v171H748v232h200v595H416q-119 0-203.5-84.5T128 1376V416q0-119 84.5-203.5T416 128h960z" fill="#ffffff" className="color000000 svgShape"></path></svg>
                    </div>
                </div>
                <div>
                    <img className='h-10 m-6' src="../src/assets/logo/techera2.png" alt="" />
                    <h1 className='text-white font-semibold md:text-center'>A product of techera</h1>
                </div>
                <div>
                <h1 className='text-white font-semibold text-lg'>Quick links</h1>
                <a href="#"><p className='text-white'>Consultation</p></a>
                <a href="#"><p className='text-white'>Remote</p></a>
                <a href="#"><p className='text-white'>Blog</p></a>
                <p className='text-white mt-10'>2024 techera. All right reserved</p>
                </div>
            </div>
        </div>
    </>
}
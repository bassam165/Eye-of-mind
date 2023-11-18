

const Footer = () => {
  return (
    <>
    <div className="mt-8 w-full bg-gray-200 px-8 md:px-[500px] flex md:flex-row flex-col space-y-4 md:space-y-0 items-start md:items-start md:justify-between text-sm md:text-md py-8">
      <div className="flex flex-col text-black">
        <p>Featured Blogs</p> 
        <p>Most Viewed</p> 
        <p>Readers Choice</p> 
      </div>

      <div className="flex flex-col text-black">
        <p>Forum</p> 
        <p>Support</p> 
        <p>Recent posts</p> 
      </div>

      <div className="flex flex-col text-black">
        <p>Privact Policy</p> 
        <p>About Us</p> 
        <p>Terms & Condition</p> 
        <p>Terms of Service</p> 
      </div>
    </div>
    <p className="py-2 pb-2 text-center bg-gray-200">All rights reserved @বুদ্ধির চোখ 2023</p>
    </>
    
  )
}

export default Footer
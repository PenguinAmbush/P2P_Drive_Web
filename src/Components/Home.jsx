import Navbar from '../Navigation/Navbar.js';
import Screen from '../images/Screen.png';




function Home(){
  return (
    <div className="Home">
      
      
      <div class="flex flex-row h-auto w-auto  mx-52 ">
        <div class="w-fit">
          <h1 class=' mt-24 pt-24 w-80 text-6xl text-left'> Decentralized access to your content</h1>
          <h2 class='pt-5 text-left text-lg'>Save and upload your files using blockchain technology</h2>       
              
            <button type='button' class='bg-[#003366] rounded-sm py-2 px-14'>
              <span class=' text-lg text-yellow-400'>Register</span>
            </button>
          
            <button type='button' class='bg-[#003366] rounded-sm  py-2 px-14 ml-10 '>
              <span class=' text-lg text-yellow-400'>Register</span>
            </button>
                
                
        </div>
        <img class="Object-fill h-fill w-fill pt-20 pl-40" src={Screen}/>
      </div>      
    </div>
    
  );
};

export default Home;
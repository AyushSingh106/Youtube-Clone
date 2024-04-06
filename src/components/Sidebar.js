import React from 'react';
import {useSelector} from 'react-redux';
import { AiOutlineHome } from "react-icons/ai";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
const sidebarItem =[{
  icons:<AiOutlineHome />,
  title:"Home"
},
{
  icons:<SiYoutubeshorts />,
  title:"Shorts"
},
{
  icons:<MdSubscriptions />,
  title:"Subscription"
},
{
    icons:<AiOutlineHome />,
    title:"Home"
  },
  {
    icons:<SiYoutubeshorts />,
    title:"Shorts"
  },
  {
    icons:<MdSubscriptions />,
    title:"Subscription"
  },
  {
    icons:<AiOutlineHome />,
    title:"Home"
  },
  {
    icons:<SiYoutubeshorts />,
    title:"Shorts"
  },
  {
    icons:<MdSubscriptions />,
    title:"Subscription"
  },
  {
    icons:<AiOutlineHome />,
    title:"Home"
  },
  {
    icons:<SiYoutubeshorts />,
    title:"Shorts"
  },
  {
    icons:<MdSubscriptions />,
    title:"Subscription"
  },
  {
    icons:<AiOutlineHome />,
    title:"Home"
  },
  {
    icons:<SiYoutubeshorts />,
    title:"Shorts"
  },
  {
    icons:<MdSubscriptions />,
    title:"Subscription"
  },
  {
    icons:<AiOutlineHome />,
    title:"Home"
  },
  {
    icons:<SiYoutubeshorts />,
    title:"Shorts"
  },
  {
    icons:<MdSubscriptions />,
    title:"Subscription"
  },
  {
    icons:<AiOutlineHome />,
    title:"Home"
  },
]
function Sidebar() {
   const open=useSelector((store)=>store.app.open);
    return (
    <div className={`fixed  ${open? "w-[180px]" : "w-[110%]"} h-[88%] ml-5 mr-2   overflow-y-scroll overflow-x-hidden`}>
        {
            sidebarItem.map((item,index)=>{
                return(
                <div key={index} className='flex mt-3 items-center py-1  px-2 text-lg gap-4'>
                    {item.icons}
                    <p className={`${open? '' : 'hidden'}`}>{item.title}</p>
                </div>

            )})
        }
    </div>
  )
}

export default Sidebar
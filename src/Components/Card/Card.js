import React from 'react'
import { UilUserCheck } from '@iconscout/react-unicons'
import { UilThumbsUp } from '@iconscout/react-unicons'
import { UilFolderUpload } from '@iconscout/react-unicons'
import { UilStar } from '@iconscout/react-unicons'
import { UilMapMarker } from '@iconscout/react-unicons'
import Repos from './Repos/Repos'
// import osama from '../../osama.jpg'
// 
const Card = (props) => {
  const myData = props.repoProp
  // const osama = for(const i in myData){
  //   return
  //   <Repos key={i} name={i.name} forks={i.forks} watchers={i.watchers} />
  // }
  // console.log('props.repoProp.name')
  console.log(myData)

  // const osama = myData.map(i=>(
  //   i.forks,
  //   i.name
  // ))
  //   console.log(osama)
  // console.log(myData[1].name)
  return (
    <div className="">
      <div className='flex flex-col items-center justify-center '>
        <div className='flex flex-col items-center justify-center border-4 border-white border-b-0 rounded-t-lg space-y-2'>
          <div className="relative w-24 h-24 md:w-40 md:h-40 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${props.sendProp.avatar_url})`}}>
            <div className='bg-gray-900 bg-opacity-75 absolute bottom-0 left-0 right-0 text-center text-xs'><h5 className='text-white'>@{props.sendProp.login}</h5></div>
          </div>
        </div>
        <div className='sm:w-1/2 md:w-3/4 lg:w-1/2 h-1/2 border-4 mb-8 border-white bg-gray-700 shadow-xl rounded-xl text-gray-300 px-2 py-4'>
            <div className="name text-2xl font-bold text-white">
              <h2>{props.sendProp.name}</h2>
            </div>

            <div className="bio text-sm font-light">  
              <i className="fi fi-rr-following"></i>
              <p className='break-normal'>{props.sendProp.bio}</p>
            </div>
              <div className="w-full grid grid-flow-col items-center justify-center space-x-4 p-2 rounded-xl bg-gray-500 text-xs">
                  <div className="follower flex flex-col items-center">
                      <UilUserCheck className="text-gray-600" text="foloowr"/>
                      <h1 className='text-lg font-semibold'>{props.sendProp.followers}</h1>
                      <h1>Followers</h1>
                  </div>
                  
                  <div className="Following flex flex-col items-center">
                    <UilThumbsUp className="text-gray-600"/>
                    <h1 className='text-lg font-semibold'>{props.sendProp.following}</h1>
                    <h1>Following</h1>
                  </div>
                  
                  <div className="Repos flex flex-col items-center">
                    <UilFolderUpload className="text-gray-600"/>
                    <h1 className='text-lg font-semibold'>{props.sendProp.public_repos}</h1>
                    <h1>Repos</h1>
                  </div>
                  
                  <div className="Stars flex flex-col items-center">
                    <UilStar className="text-gray-600"/>
                    <h1 className='text-lg font-semibold'>45</h1>
                    <h1>Stars</h1>
                  </div>
                  
                  <div className="location flex flex-col items-center">
                    <UilMapMarker className="text-gray-600"/>
                    <h1 className='text-sm font-semibold'>{props.sendProp.location}</h1>
                    <h1>Location</h1>
                  </div>
            </div>
        </div>
          <h1 className='text-2xl'>All Repositories</h1>
      </div>
      <div className="grid md:grid-cols-3 gap-2">
        { myData.map(i=>(
          <Repos key={i} name={i.name} stars={i.stars} forks={i.forks} watchers = {i.watchers} />
          ))
        }
      </div>
    </div>  
  )
}

export default Card

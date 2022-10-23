import React from 'react'
import { UilStar } from '@iconscout/react-unicons'
import { UilCodeBranch } from '@iconscout/react-unicons'
import { UilEye } from '@iconscout/react-unicons'


const Repos = (props) => {
//     console.log('repository')
//   console.log(props)
//   console.log(props.forks)
//   console.log(props.watchers)
  return (
    <>
        {
                <div className='w-full h-1/2  text-white py-2'>
                <div className="p-4 border-yellow-700 bg-gray-800 rounded-lg border-2">
                    <div className='mb-2'>
                        <div className="repoName text-xl font-bold">
                            <h1>{props.name}</h1>
                        </div>
                        {/* <div className="repoDes text-sm font-thin">
                            <h1>Repos Description</h1>
                        </div> */}
                    </div>
                    <div className="bg-gray-600 text-white flex items-center px-2 py-4 justify-center space-x-6 rounded-md">
                        <div className="stars flex flex-col items-center">
                            <UilStar className="text-yellow-600"/>
                            <h4 className='mt-2 font-bold text-lg'>{props.stars}</h4>
                            <p className='mt-[-5px] font-light text-sm'>Stars</p>
                        </div>
                        <div className="forks flex flex-col items-center">
                            <UilCodeBranch className="text-yellow-600"/>
                            <h4 className='mt-2 font-bold text-lg'>{props.forks}</h4>
                            <p className='mt-[-5px] font-light text-sm'>forks</p>
                        </div>
                        <div className="watching flex flex-col items-center">
                            <UilEye className="text-yellow-600"/>
                            <h4 className='mt-2 font-bold text-lg'>{props.watchers}</h4>
                            <p className='mt-[-5px] font-light text-sm'>watching</p>
                        </div>
                    </div>
                </div>
            </div>
        }
    </>
  )
}

export default Repos

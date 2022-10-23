// import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import Form from '../form/Form'

const Banner = () => {
    const [showForm, setShowForm] = useState(false)
    const [input, setInput] = useState('')
    const [user, setUser] = useState([])
    const [repos, setRepos] = useState([])
    const setFormHandler = ()=>{
        setShowForm(true)
    }
    const my_token = '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';
    const searchUserHandler = async (enterUserToSearch) => {
        const response = await fetch(`https://api.github.com/users/${enterUserToSearch} `,{
            'headers': {
                'Authorization': `token ${my_token}` 
              }
            })
        const data = await response.json()
        setUser(data)

        //for showing card we used setInput state
        setInput(enterUserToSearch)
        console.log(data)
        console.log("above user data")
        
        // code for repos fethcing
        console.log("below repos data")
        const repos = await fetch(`https://api.github.com/users/${enterUserToSearch}/repos`,{
            'headers': {
                'Authorization': `token ${my_token}` 
              }
        })
        const reposData = await repos.json()

        // let car = reposData.map(car => console.log(car.name));
        // console.log('car')
        // console.log(car)
        // console.log('car')
        // const loadedData = []
        
        const listData = reposData.map((i)=>{
            return{
                name:i.name,
                forks:i.forks,
                watchers:i.watchers,
                stars: i.stargazers_count                
            }

        })
        // console.log('listData')s
        // console.log(listData[1].name)
        // for(const key in reposData){
        //     loadedData.push({
        //     id: key,
        //     name: reposData[1].name,
        //     forks: reposData[key].forks,
        //     watchers: reposData[key].watchers
        //   })
        //   console.log('loadedData')
        //   console.log(loadedData.name)
        // }
        setRepos(listData)
        // console.log('listData')  
        // console.log(listData[1].name)  
        // console.log('listData')  
    }
    useEffect(()=>{
        searchUserHandler()
    },[showForm])

  return (
    <section className="px-5 banner text-white py-10">
        <div className="">
            {   !showForm &&
            <div className="text-center flex flex-col items-center">
                <h1 className="text-3xl sm:text-5xl font-bold text-transparent  bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
                    Search For Any 
                    <span className="block">
                    GitHub User Profile
                    </span>
                </h1>

                <p className="max-w-xl text-sm sm:leading-relaxed font-thin sm:text-xl">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
                </p>    

                <div className="mt-8">
                    <button onClick={setFormHandler} className="w-full px-12 py-3 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-white focus:outline-none focus:ring">
                        Let's Starting Searching
                    </button>
                </div>
            </div>}
            {   showForm && 
                    <Form searchUser={searchUserHandler}/>
                }
            {
                showForm && input &&
                    <div className={`mt-8`}>
                        <Card sendProp={user} repoProp={repos} />                
                    </div>
            }
 
        </div>
    </section>
  )
}

export default Banner

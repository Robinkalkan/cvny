import bild3 from '../assets/background.jpeg'
import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CircleLoader } from 'react-spinners'
export default function Contact() {


  const [repos, setRepos] = useState([])
  const [isLoading, setIsloading] = useState(true)
  const url = 'https://api.github.com/users/robinkalkan/repos'

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const filteredRepos = data.filter(repo => {
          return repo.language == "C#"
        })

        setTimeout(() => {
          setRepos(filteredRepos)
          setIsloading(false)
        }, 3000)

      })
  }, [])

  if (isLoading) {
    return <CircleLoader
      color="#8136d6"
      size={70}
    />
  }

  return (
    <div className='portfolioCard'>
      {
        repos.map(repo => {
          return (
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={bild3}/>
              <Card.Body>
                <Card.Title>
                  <h3>Project Name:</h3>
                  <p>{repo.name}</p>
                </Card.Title>
                <Card.Text>
                  <h3>Used Launguage:</h3>
                  <p>{repo.language}</p>
                </Card.Text>
                <Button variant="warning"><Card.Link href={repo.html_url}>Card Link</Card.Link></Button>
              </Card.Body>
            </Card>
          )
        })
      }
    </div>
  )
}
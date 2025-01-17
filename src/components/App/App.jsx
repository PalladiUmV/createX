import { Routes, Route, Navigate } from 'react-router-dom'
import { About } from '../About/AboutPage'
import { Courses } from '../Courses/Courses'
import { Events } from '../Events/Events'
import { HomePage } from '../HomePage/HomePage'
import { Blog } from '../Blog/Blog'
import './App.scss'
import { BlogCardDetails } from '../Blog/BlogCardDetails'

function App() {
    return (
        <>
            <Routes>
                <Route path='/createx' element={<HomePage />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/courses' element={<Courses />}></Route>
                <Route path='/events' element={<Events />}></Route>
                <Route path='/blog' element={<Blog />}></Route>
                <Route path='/blog/:cardId' element={<BlogCardDetails />} />
                <Route path='*' element={<Navigate to='/createx' replace />} />
            </Routes>
        </>
    )
}

export default App

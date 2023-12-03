import React, { useEffect } from 'react'
import notification from '../img/notificacion.png'
import { useEvents } from '../context/EventContext'
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

function EventsPage() {
  const { getEvents, events, deleteEvent } = useEvents();
  useEffect(() => {
    getEvents()
  },[])


  if (events.length === 0) return (<h1 className='h-screen bg-cover bg-center bg-[url("https://i.ibb.co/LQf91TG/fondo-EB.webp")] text-7xl text-center'>No se han agregado eventos</h1>)


  return (
    <>
      <div className="h-screen overflow-auto bg-[url('https://i.ibb.co/LQf91TG/fondo-EB.webp')] bg-cover bg-center flex flex-col justify-center items-center">
        <h1 className='h-[10%] text-7xl text-[#FFEEB3]'>Eventos</h1>
        <div className='w-full flex h-full justify-center items-center gap-3 flex-wrap'>
          {
            events.map(event => (
              <div key={event._id} className='bg-[#000000a4] w-1/4 h-2/3 flex flex-col justify-between rounded-2xl text-[#FFEEB3]' >
                <img className="h-2/4 border-4 m-4 rounded-2xl border-[#AC703E]" src="" alt="" />
                <h2 className='text-center text-2xl'>{event.name}</h2>
                <p className='text-center text-xl'>{event.address}</p>
                <p className='text-center text-xl'>{event.description}</p>
                <p className='text-center text-xl'>{dayjs(event.date).utc().format("DD/MM/YYYY")}</p>
                <div className='flex justify-between items-center'>
                  <Link className='flex items-center justify-center bg-[#FFEEB3] text-[#AC703E] text-xl m-2 font-bold h-12 w-2/5 rounded-full mt-2 hover:bg-[#AC703E] hover:text-[#FFEEB3] duration-300' to={`/events/${event._id}`}>Editar evento</Link>
                  <button className='bg-[#FFEEB3] text-[#AC703E] text-xl m-2 font-bold h-12 w-1/3 rounded-full mt-2 hover:bg-red-700 hover:text-[#FFEEB3] duration-300' onClick={()=>{deleteEvent(event._id)}}>Eliminar</button>
                  <img className='h-12 m-2' src={notification} alt="" />
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default EventsPage
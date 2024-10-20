import { json, redirect, useRouteLoaderData } from "react-router-dom";

import EventItem from "../components/EventItem";
import { mockEventApi } from '../mockEvent';

function EventDetailPage() {
    const data = useRouteLoaderData('event-detail')

    return (
        <EventItem event={data.event} />
    )
}

export default EventDetailPage;

export async function loader({ params, request }) {
    const id = params.eventId

    // const response = await fetch('http://localhost:8080/events/' + id)
    // if (!response.ok) {
    //     throw json({message: 'Could not fetch details for selected event.'}, {
    //         status: 500
    //     })
    // } else {
    //     return response
    // }
    const response = await mockEventApi.getEvent(id)
    return response
}

export async function action({ params, request }) {
    const eventId = params.eventId

    // const response = await fetch('http://localhost:8080/events/' + eventId, {
    //     method: request.method
    // })
    // if (!response.ok) {
    //     throw json({message: 'Could not delete event.'}, {
    //         status: 500
    //     })
    // }

    const response = await mockEventApi.deleteEvent(eventId)

    return redirect('/events')
}
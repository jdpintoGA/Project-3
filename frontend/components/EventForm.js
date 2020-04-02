import React from 'react'
import bulmaCalendar from 'bulma-calendar'



const calendars = bulmaCalendar.attach('[type="date"]')
calendars.forEach(calendar => {
  calendar.on('date:selected', date => {
    console.log(date)
  })
})

const element = document.querySelector('#my-element')
if (element) {
  element.bulmaCalendar.on('select', datepicker => {
    console.log(datepicker.data.value())
  })
}

const EventForm = ({ handleSubmit, handleChange, errors }) => {
  return <form
    className="form"
    onSubmit={(event) => handleSubmit(event)}
  >
    <div className="field">

      <label className="label">
        Event Name
      </label>

      <div className="control">
        <input
          onChange={(event) => handleChange(event)}
          type="text"
          name="eventName"
          className="input-g"
        />
      </div>

      {errors.eventName && <small className="help is-danger">
        {errors.eventName}
      </small>}
    </div>

    <div className="field">
      <label className="label">
        Event Type
      </label>
      <div className="control">
        <input
          onChange={(event) => handleChange(event)}
          type="text"
          name="eventType"
          className="input-g"
        />
      </div>
      {errors.eventType && <small className="help is-danger">
        {errors.eventType}
      </small>}
    </div>

    <div className="field">
      <label className="label">
        Event Description
      </label>
      <div className="control">
        <input
          onChange={(event) => handleChange(event)}
          type="text"
          name="eventDescription"
          className="input-g"
        />
      </div>
      {errors.eventDescription && <small className="help is-danger">
        {errors.eventDescription}
      </small>}
    </div>

    <div className="field">
      <label className="label">
        Platform
      </label>
      <div className="control">
        <input
          onChange={(event) => handleChange(event)}
          type="text"
          name="platform"
          className="input-g"
        />
      </div>
      {errors.platform && <small className="help is-danger">
        {errors.platform}
      </small>}
    </div>

    <div className="field">
      <label className="label">
        Location
      </label>
      <div className="control">
        <input
          onChange={(event) => handleChange(event)}
          type="text"
          name="location"
          className="input-g"
        />
      </div>
      {errors.location && <small className="help is-danger">
        {errors.location}
      </small>}
    </div>

    <div className="field">
      <label className="label">
        Date
      </label>
      <div className="control">
        <input
          onChange={(options) => handleChange(options)}
          type="date"
          name="date"
          className="input"
          data-display-mode="inline" data-is-range="true" data-close-on-select="false" closeonselect="true" position="right">
        </input>
      </div>
    </div>

    <button className="button-G" width="60">
      Create Event
    </button>
  </form>
}
export default EventForm
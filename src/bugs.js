import axios from 'axios';
import React from 'react';

export const BugForm = () => {
  const [name, setName] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [status, setStatus] = React.useState('');

  function reset() {
    setName('');
    setTitle('');
    setStatus('');
  }

  function submit() {
    axios
      .post('https://bugbook-server.herokuapp.com/bugs', {
        title,
        status,
        reportedBy: name
      })
      .then(() => reset());
  }

  return (
    <div className="card">
      <form
        id="bug-form"
        onSubmit={e => {
          e.preventDefault();
          submit();
        }}
      >
        <input type="hidden" name="id" id="id" />
        <div className="card-title">Create Issue</div>
        <div className="card-content">
          <div className="form-control">
            <label htmlFor="reportedBy">Your Name</label>
            <input
              value={name}
              onChange={ev => setName(ev.target.value)}
              id="reportedBy"
              name="reportedBy"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="title">Issue Title</label>
            <input
              value={title}
              onChange={ev => setTitle(ev.target.value)}
              id="title"
              name="title"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="status">Status</label>
            <select
              value={status}
              onChange={ev => setStatus(ev.target.value)}
              id="status"
              name="status"
              required
            >
              <option value="" />
              <option value="New">New</option>
              <option value="In Progress">In Progress</option>
            </select>
          </div>
        </div>
        <div className="card-actions">
          <button type="submit" className="btn">
            Create
          </button>
          <button onClick={reset} type="reset" className="btn btn-white">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

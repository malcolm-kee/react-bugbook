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

export const BugList = () => {
  const [bugs, setBugs] = React.useState([]);
  React.useEffect(() => {
    axios
      .get('https://bugbook-server.herokuapp.com/bugs')
      .then(res => setBugs(res.data));
  }, []);

  return (
    <div id="bugs-container">
      {bugs.map(bug => (
        <article className="card" key={bug.id}>
          <div className="card-title">{bug.status}</div>
          <div className="card-content">
            <p>{bug.title}</p>
            <i>Reported by {bug.reportedBy}</i>
          </div>
        </article>
      ))}
      {bugs.length === 0 && <div className="spinner" />}
    </div>
  );
};

export const BugPage = () => {
  return (
    <main className="container">
      <BugList />
      <div id="bug-form-container">
        <BugForm />
      </div>
    </main>
  );
};

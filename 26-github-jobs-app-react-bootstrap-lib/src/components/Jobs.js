import React, { useState } from 'react'
import { Badge, Button, Card, Collapse } from 'react-bootstrap';
import ReactMarkdown from "react-markdown";
import companyLogo from "../google.png";
import rehypeRaw from "rehype-raw";

export const Jobs = ({ job }) => {
    const [open, setOpen] = useState(false);

    return (
        <Card className='mb-2'>
            <Card.Body>
                <div className='d-flex justify-content-between'>
                    <div>
                        <Card.Title>
                            {job.title} - <span className='text-muted font-weight-light'>{job.company}</span>
                        </Card.Title>
                        <Card.Subtitle>
                            {new Date(job.created_at).toLocaleDateString()}
                        </Card.Subtitle>
                        <Badge variant="primary" className='mr-2'>{job.type}</Badge>
                        {" "}<Badge variant="success">{job.location}</Badge>
                        <div style={{ wordBreak: "break-all" }}>
                            {/* <ReactMarkdown children={job.how_to_apply} /> */}
                            <a href="${job.how_to_apply}" target="_blank">{job.how_to_apply}</a>
                        </div>
                    </div>
                    <img alt={job.company} src={companyLogo} className='d-none d-md-block' height="50" />
                </div>
                <Card.Text>
                    <Button variant='success' onClick={() => setOpen(prevOpen => !prevOpen)}>
                        {!open ? "View Details": "Hide Details"}
                        </Button>
                </Card.Text>
                <Collapse in={open}>
                    <div className='mt-4'>
                        <ReactMarkdown children={`<strong>${job.description} </strong>`} rehypePlugins={[rehypeRaw]}/>
                    </div>
                </Collapse>
            </Card.Body>
        </Card>
    )
}

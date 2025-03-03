import { div } from 'framer-motion/client';
import React from 'react'
import { MdSchool } from 'react-icons/md'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function EduBg() {
    return (
        <div
            data-aos="fade-in"
            data-aos-delay="300"
        >
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="w-full"
                    contentStyle={{ background: 'rgb(255, 255, 255)', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid  skyblue' }}
                    icon={<MdSchool style={{ fontSize: "40px" }} />}
                    iconStyle={{ backgroundColor: 'skyblue' }}
                >
                    <h6 className="mb-2 text-xl font-semibold">M.Tech Human Anatomy</h6>
                    <p>Federal University Of Technology Akure (FUTA) - Ondo State, Nigeria</p>
                    <p className="text-gray-500 text-sm">Jan 2025 - till Date</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-item--work"
                    contentStyle={{ background: 'rgb(255, 255, 255)', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid  skyblue' }}
                    icon={<MdSchool style={{ fontSize: "40px" }} />}
                    iconStyle={{ backgroundColor: 'skyblue' }}
                >
                    <h6 className="mb-2 text-xl font-semibold">B.Tech Human Anatomy</h6>
                    <p>Ladoke Akintola University Of Technology Ogbomoso (LAUTECH) - Oyo State, Nigeria</p>
                    <p className="text-gray-500 text-sm">August 2017 - August 2023</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-item--work"
                    contentStyle={{ background: 'rgb(255, 255, 255)', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid  skyblue' }}
                    icon={<MdSchool style={{ fontSize: "40px" }} />}
                    iconStyle={{ backgroundColor: 'skyblue' }}
                >
                    <h6 className="mb-2 text-xl font-semibold">SSCE</h6>
                    <p>Federal Science and Technical College Usi-Ekiti, Ekiti State, Nigeria</p>
                    <p className="text-gray-500 text-sm">2010 - 2016</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>

    )
}

export default EduBg

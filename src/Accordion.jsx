import React, { useState } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri';

const Accordion = () => {

    const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    {
      question: "What are accordion components?",
      answer:
        "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.",
    },
    {
      question: "What are they used for?",
      answer:
        "They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options.",
    },
    {
      question: "Accordion as a musical instrument",
      answer:
        "The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.",
    },
    {
      question:
        "Can I create an accordion component with a different framework?",
      answer:
        "Yes of course, it is very possible to create an accordion component with another framework.",
    },
  ];

  const handleItemClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  }

  const [isActive, setIsActive] = useState(0);
  const accordionData = [
    {
      title: 'Section 1',
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
    },
    {
      title: 'Section 2',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`
    },
    {
      title: 'Section 3',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
    }
  ];

  const handleItemClick1 = (index) => {
    setIsActive(isActive === index ? null : index);
  }

  return (
    <div>
        <h1>React Accordion Demo</h1>
        <div className="accordion">
        {
            accordionData.map((item, index) => {
                return (
                    <div>
                        <div className="accordion-item">
                            <div className="accordion-title" onClick={() => handleItemClick1(index)}>
                                <h1>{item.title}</h1>
                                    <h1>{isActive === index ? '-' : '+'}</h1>
                                </div>
                                {isActive === index ?<div className="accordion-content">{item.content}
                            </div> : ''}
                        </div>
                    </div>
                )
            })
        }
        </div>
        <div className="container">
        {
            data.map((item, index) => {
                return (
                    <div className="wrapper" key={index}>
                        <h5 className={`question-container ${activeIndex === index ? 'active' : ''}`} onClick={() => handleItemClick(index)}>
                            <p className='question-content'>{item.question}</p>
                            <RiArrowDropDownLine className={`arrow${activeIndex === index ? ' active' : ''}`} />
                        </h5>
                        <div  className="anser-container" style={activeIndex === index ? { height: "max-content" }
          : { height: "0px" }}>
            <p className="answer-content">{item.answer}</p>

                        </div>
                    </div>
                )
            } )
        }
      </div>
      
    </div>
  )
}

export default Accordion

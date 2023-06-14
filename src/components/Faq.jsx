import { React, useState } from "react";
import "./faq.css";
const data = [
  {
    id: 1,
    title: "What is Netflix?",
    name: "first",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisiofficia suscipit voluptatum quam officiis neque quibusdam quas alias pariatur consectetur",
    display: false,
  },
  {
    id: 2,
    title: "What is Netflix?",
    name: "second",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisiofficia suscipit voluptatum quam officiis neque quibusdam quas alias pariatur consectetur",
    display: false,
  },
  {
    id: 3,
    title: "What is Netflix?",
    name: "third",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisiofficia suscipit voluptatum quam officiis neque quibusdam quas alias pariatur consectetur",
    display: false,
  },
  {
    id: 4,
    title: "What is Netflix?",
    name: "fourth",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisiofficia suscipit voluptatum quam officiis neque quibusdam quas alias pariatur consectetur",
    display: false,
  },
];
const Faq = () => {
  const [faqlist, setFaqlist] = useState(data);

  //useEffect(() => {}, [data]);
  console.log(faqlist[0]);
  const changeHandler = (id) => {
    setFaqlist(
      faqlist.map((faq) =>
        faq.id === id
          ? { ...faq, display: !faq.display }
          : { ...faq, display: false }
      )
    );
  };
  return (
    <div className="faq">
      <h2>Frequently Asked Question</h2>
      <ul className="accordion">
        {faqlist.map((faq) => {
          return (
            <li key={faq.id}>
              <label
                className="label"
                onClick={() => {
                  changeHandler(faq.id);
                }}
              >
                {faq.title}
              </label>
              {faq.display && <div className="content">{faq.content}</div>}
            </li>
          );
        })}
      </ul>
      <small>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, minima.
      </small>
      <div className="emailsignup">
        <input type="text" placeholder="Email Adress" />
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default Faq;

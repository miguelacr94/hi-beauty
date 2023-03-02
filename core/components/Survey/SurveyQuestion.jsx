import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import useSubscriptionForm from "../../hooks/useSubscriptionForm";
import useUser from "../../hooks/useUser";
import Button, { OutlinedButton } from "../shared/Button";


const SurveyQuestion = ({ question }) => {
  const { data, addAnswer, step, setStep, setData, _question, setQuestion, active, setActive } = useSubscriptionForm();


  const { user } = useUser()

  const updateForm = (a) => {

    const info = {
      question: question?.question,
      answer: a.name,
    };

    if (question?.multiple) {
      let currentAnswer = data?.questions?.[`q${question?.id}`]?.answer || _question[step - 1].answer;
      if (isActive(a)) {

        const answers = currentAnswer?.split(", ") ?? [];
        currentAnswer = answers.filter((i) => i !== a.name);


        addAnswer({
          [`q${question.id}`]: {
            ...info,
            answer: currentAnswer.join(", "),
          },
        });

        const index = _question.findIndex((f) => f.question == info.question);
        if (index != -1) {
          _question[index] = {
            ...info,
            answer: currentAnswer.join(", "),
          }
          setQuestion([..._question]);
        }

        return;



      }

      if (currentAnswer) {





        const newData = {
          question: question?.question,
          answer: `${currentAnswer}, ${info.answer}`
        }

        const index = _question.findIndex((f) => f.question == info.question);
        if (index != -1) {
          _question[index] = newData;
          setQuestion([..._question]);
        }
        // }
        addAnswer({
          [`q${question?.id}`]: {
            ...info,
            answer: `${currentAnswer}, ${info.answer}`,
          },
        });


      } else {
        addAnswer({ [`q${question?.id}`]: info });

      }
    } else {
      const index = _question.findIndex((f) => f.question == info.question);
      if (index != -1) {
        _question[index] = info;
        setQuestion([..._question]);
      }
    }
  };


  const isActive = (item) => {
    if (question?.multiple) {
      return _question[step - 1].answer
        .split(", ")
        .includes(item.name);
    }

    return null;

    // data?.questions?.[`q${question?.id}`]?.answer == item.name;
  };

  const isRequired = () => {
    if (question?.multiple) {
      const currentAnswer = data?.questions?.[`q${question?.id}`]?.answer;

      return !!!currentAnswer;
    }

    return true;
  };


  const onSubmit = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  useEffect(() => {
    if (active) {
      addAnswer(user?.questions);
      setQuestion(Object.values(user?.questions));
      setActive(false);
      console.log('eje..active')
    }
  }, [setActive]);



  if (!_question) {
    return null;
  }


  const filterMultiselect = (items) => {
    if (typeof _question[step - 1]?.answer == 'object') {
      const filter = _question[step - 1]?.answer?.filter((f) => f === items.name);
      if (filter.length > 0) {
        return true;
      } else {
        return false;
      }
    }

  }


  return (
    <form
      className="flex flex-col z-50 items-center justify-center w-full px-5 py-10 text-center text-gray-800 bg-gray-100 bg-opacity-60 rounded-2xl animate-fadeIn"
      onSubmit={onSubmit}
    >
      <fieldset className="flex flex-col w-full space-y-10">
        <h3 className="text-2xl md:text-3xl">{question?.question}</h3>
        <div className="flex flex-wrap items-center justify-center w-full gap-5">
          {question?.options.map((item, index) => (
            <Answer
              key={index}
              name={`q${question?.id}`}
              item={item}
              active={isActive(item) || _question?.[step - 1]?.answer == item?.name}
              required={''}
              onSelect={() => updateForm(item)}
              multiple={question?.multiple}
            />


          ))}
        </div>
        <div className="flex flex-col items-center justify-center w-full space-y-2 font-light">
          <span>Debes seleccionar una opción</span>
          <div className="flex space-x-5">
            <OutlinedButton
              type="button"
              onClick={() => setStep(step - 1)}
              className="px-8 text-lg"
              text="Anterior"
            />
            <Button type="submit" className="px-11  text-lg" text="Siguiente" h='h-12' />
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default SurveyQuestion;

const Answer = ({
  name,
  item,
  active,
  multiple = false,
  onSelect,
  required = true,
}) => {
  return (
    <div className={`relative flex`}>
      <input
        className="absolute z-0 transform -translate-y-1/2 ring-0 top-1/2 left-1/2"
        id={name}
        type={multiple ? "checkbox" : "radio"}
        name={name}
        defaultChecked={active}
        required={required}
      />
      <label
        htmlFor={name}
        onClick={onSelect}
        className={`px-8 py-2 text-base duration-300 transform cursor-pointer active:scale-95 hover:scale-105 rounded-lg z-10 flex space-x-2 items-center ${active ? "plan-hot-btn plan-btn text-white" : "bg-white text-gray-800"
          }`}
      >
        {item.color && (
          <div
            className="rounded-full w-7 h-7 aspect-square"
            style={{
              backgroundColor: item.color,
            }}
          />
        )}
        <span className="font-light">{item.name}</span>
      </label>
    </div>
  );
};

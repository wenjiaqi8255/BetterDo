"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-lime-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-lime-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "1. How is this app different from other todo apps? Why should I switch to this one?",
    answer: ["While traditional todo apps only tell you ","what to do,"," BetterDo tells you ", "what's best to do right now. ",
      "When you're tired, it automatically reminds you to rest, preventing inefficient forced work"],
  },
  {
    question: "2. Will using this app take up more of my time? Is tracking energy levels complicated?",
    answer: "It won't take much extra time: You don't need to record it manually if you have a smartwatch and allow us to access your health data. If you don't have a smartwatch, you can use the app's in-built tracker to record your energy levels. It's simple and easy to use.",
  },
  {
    question: "3. I often feel fatigued - how specifically can this app help me?",
    answer:
      "BetterDo will: Recommend tasks suitable for your current state, ensuring you don't handle energy-intensive work when you're most tired; and remind you to rest when you're tired, preventing excessive fatigue.",
  },
  {
    question: "4. You claim this app increases productivity - do you have specific data to support this? How long until I see results? ",
    answer:
      "We are working on a research project to validate our claims.",
  }
];

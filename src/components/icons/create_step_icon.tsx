import { TickIcon } from "./tick_icon"

export const CreateStepIcon = ({ step, currentStep }: { step: number, currentStep: number }) => {
  return (
    <>
      {currentStep > step ? (
        <div className="w-[48px] h-[48px] bg-[#FFDE61] rounded-full flex justify-center items-center">
          <TickIcon fillColor="#53B268" width="24" height="24" />
        </div>
      ) : null}
      {currentStep === step ? (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1.5" y="1.5" width="45" height="45" rx="22.5" fill="#FFDE61" />
          <rect x="1.5" y="1.5" width="45" height="45" rx="22.5" stroke="#FFDE61" stroke-width="3" />
          <path d="M26.1875 16.6875C22.875 15.375 19.25 9.75001 14.75 14.25C10.25 18.75 15.875 22.375 16.725 25.225C17.575 28.075 17.4625 30.9625 20.2375 33.7375C24.4 37.9 30 36 33.25 32.75C36.5 29.5 38.4 23.9 34.2375 19.7375C31.925 17.425 29.5 18 26.1875 16.6875Z" stroke="#53B268" stroke-width="3" />
          <path d="M29.7749 23.275C30.5109 24.0109 30.9006 25.0328 30.8584 26.1159C30.8162 27.1989 30.3455 28.2543 29.5499 29.05C28.7542 29.8456 27.6988 30.3163 26.6158 30.3585C25.5328 30.4007 24.5109 30.0109 23.7749 29.275C22.2422 27.7422 21.6492 24.4632 23.3062 22.8062C24.9631 21.1492 28.2422 21.7422 29.7749 23.275Z" stroke="#53B268" stroke-width="3" />
        </svg>
      ) : null}
      {currentStep < step ? (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1.5" y="1.5" width="45" height="45" rx="22.5" stroke="#C4C8C8" stroke-width="3" />
          <path d="M26.1875 16.6875C22.875 15.375 19.25 9.75001 14.75 14.25C10.25 18.75 15.875 22.375 16.725 25.225C17.575 28.075 17.4625 30.9625 20.2375 33.7375C24.4 37.9 30 36 33.25 32.75C36.5 29.5 38.4 23.9 34.2375 19.7375C31.925 17.425 29.5 18 26.1875 16.6875Z" stroke="#C4C8C8" stroke-width="3" />
          <path d="M29.7749 23.275C30.5109 24.0109 30.9006 25.0328 30.8584 26.1159C30.8162 27.1989 30.3455 28.2543 29.5499 29.05C28.7542 29.8456 27.6988 30.3163 26.6158 30.3585C25.5328 30.4007 24.5109 30.0109 23.7749 29.275C22.2422 27.7422 21.6492 24.4632 23.3062 22.8062C24.9631 21.1492 28.2422 21.7422 29.7749 23.275Z" stroke="#C4C8C8" stroke-width="3" />
        </svg>
      ) : null}
    </>
  )
}
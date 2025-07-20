import ErrorBoundary from "../components/ErrorBoundary"

export const ErrorBoundaryExample = () => {
  const someObject = {
    thing1: "value",
    thing2: "value",
  }
  return (
    <ErrorBoundary>
      {someObject}
    </ErrorBoundary>
  )
}
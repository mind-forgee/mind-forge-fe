import SecondaryButton from "../../components/ui/SecondaryButton"
import DialogLayout from "../../layouts/DialogLayout"

const ErrorDialog = () => {
  return (
    <DialogLayout>
      <img src="/images/error-icon.png" alt="Error" className="mb-6 mx-auto" />
      <h2 className="text-3xl font-bold text-secondary mb-2">
        Something Went Wrong!
      </h2>
      <p className="text-secondary mb-12 text-sm">
        Something went wrong! Please retry or go back to <br /> Homepage
      </p>
      <SecondaryButton children={"Homepage"} onclick={() => window.location.href = "/"} />
    </DialogLayout>
  )
}

export default ErrorDialog
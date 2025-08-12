import SecondaryButton from "../../components/ui/SecondaryButton"
import DialogLayout from "../../layouts/DialogLayout"

const SuccessDialog = () => {
  return (
    <DialogLayout>
      <img src="/images/success-icon.png" alt="Success" className="mb-6 mx-auto" />
      <h2 className="text-3xl font-bold text-secondary mb-2">
        Congrats! You are successfully registered!
      </h2>
      <p className="text-secondary mb-12 text-sm">
        The course you selected has been opened. Please click the <br /> button below.
      </p>
      <SecondaryButton children={"Homepage"} onclick={() => window.location.href = "/select-course"} />
    </DialogLayout>
  )
}

export default SuccessDialog
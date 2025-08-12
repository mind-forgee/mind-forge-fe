import SecondaryButton from "../../components/ui/SecondaryButton"
import DialogLayout from "../../layouts/DialogLayout"

const NotFound = () => {
  return (
    <DialogLayout>
      <h1 className="text-9xl font-bold text-secondary mb-2">404</h1>
      <h2 className="text-2xl font-bold text-secondary mb-2">
        Oops! An Error! Page Not Found
      </h2>
      <p className="text-secondary mb-12 text-sm">
        We are sorry there might be a problem from our server. <br/> Please email us for the details!
      </p>
      <SecondaryButton children={"Homepage"} onclick={() => window.location.href = "/"} />
    </DialogLayout>
  )
}

export default NotFound
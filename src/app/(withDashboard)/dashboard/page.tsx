import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div>
      {session?.user && (
        <>
          <Image
            src={
              session?.user?.image ||
              "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1719050528~exp=1719054128~hmac=15e927e5a4ed4c4af5407b0ccef975841ffbb29752a5d364a19148acfa9358c7&w=740"
            }
            alt="profile"
            width={200}
            height={200}
            className="mx-auto mt-5 rounded-full"
          />
          <h1 className="text-4xl text-center mt-10">
            Welcome {session?.user?.name}
          </h1>
          <h1 className="text-2xl text-center mt-5 text-blue-500">
            {session?.user?.email}
          </h1>
        </>
      )}
    </div>


  );
};

export default DashboardPage;



export default async function DeleteEmployee(id: string, body = {}) {
    try {
        const resp = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/employees/${id}`,
            {
                //@ts-ignore
                headers: {
                    "Content-Type": "application/json",
                    projectId: process.env.NEXT_PUBLIC_COSMOCLOUD_PROJECT_ID,
                    environmentId:
                        process.env.NEXT_PUBLIC_COSMOCLOUD_ENVIRONMENT_ID,
                },
                body: JSON.stringify({}),
                method: "DELETE",
            }
        );
        if (resp.status === 200) {
            return true;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}

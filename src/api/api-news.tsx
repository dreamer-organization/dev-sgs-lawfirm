import { newsDetail } from "@/data/News";
import API from "@/lib/axios-client"

export const getNewsMutationFn = async ({
    limit,
    page,
    search,
}: {
    limit: number,
    page: number,
    search?: string
}) => {
    const response = await API.get(`/peserta/get-master-peserta`, {
        params: {
            limit,
            page,
            search
        },
    });
    return response?.data || [];
};

export const getDetailNewsFn = async (slug: string) => {
    console.log("slug :", slug);

    // nanti ganti ini saat api ready
    // const response = await API.get("/news/detail", {
    //     params: { slug },
    // });
    // return response.data || [];

    // simulasi loading API
    await new Promise((resolve) => setTimeout(resolve, 1200));


    if (slug !== newsDetail.data.slug) {
        throw new Error("Article not found");
    }

    return newsDetail.data;
};

export const editInformasiKaryawanMutationFn = async (data: any) => {
    await API.put(`/user/active`, data)
}

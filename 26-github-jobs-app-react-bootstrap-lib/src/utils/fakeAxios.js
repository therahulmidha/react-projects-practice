const jobData = [
    {
        id: 1,
        title: "Software Engineer",
        company: "Google Inc.",
        created_at: "2022-05-20",
        type: "Full Time",
        location: "Delhi",
        how_to_apply: "www.example.com",
        description: "\
        Minimum 2 years of experience \
         Must have knowledge in Javascript \
         "
    },
    {
        id: 2,
        title: "Software Engineer",
        company: "Google Inc.",
        created_at: "2022-05-21",
        type: "Full Time",
        location: "Noida",
        how_to_apply: "www.example2.com",
        description: "\
        Minimum 2 years of experience \
         Must have knowledge in Javascript \
         "
    }
];

export const fakeAxios = {
    get: (url, options = {}) => {
        const isError = false; //Math.floor(Math.random() * 10) % 5 === 0;
        return new Promise((resolve, reject) => {
            isError ? setTimeout(() => {
                reject(new Error("Error getting data"))
            }, 1000) : setTimeout(() => {
                resolve({ data: jobData })
            }, 1000);
        })
    }
}
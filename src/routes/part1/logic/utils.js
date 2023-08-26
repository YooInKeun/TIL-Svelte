export async function getRandomNumber() {
    const res = await generateRandomNumber();

    if (res.ok) {
        return await res.text();
    }
    throw new Error('Request failed');
}

async function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100);
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                ok: true,
                text: () => Promise.resolve(randomNumber.toString())
            });
        }, 1000)
    });
}

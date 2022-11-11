use deno_bindgen::deno_bindgen;

#[deno_bindgen]
pub fn count(mut n: u32) -> u32 {
    let mut counter: u32 = 0;
    while n > 1 {
        if n % 2 == 0 {
            n /= 2;
        } else {
            n *= 3;
            n += 1;
        }
        counter += 1;
    }
    counter
}

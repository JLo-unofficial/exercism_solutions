use std::cmp::Ordering;

/// Binary search implementation
///
/// * `array`: Search space
/// * `key`: Target item
pub fn find(array: &[i32], key: i32) -> Option<usize> {
    let mut low: usize = 0;
    let mut high: usize = array.len();

    while low < high {
        let middle = (high + low) / 2;
        match array[middle].cmp(&key) {
            Ordering::Equal => return Some(middle),
            Ordering::Greater => high = middle,
            Ordering::Less => low = middle + 1,
        }
    }
    None
}

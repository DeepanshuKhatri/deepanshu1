function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
  
  function deleteDuplicates(head) {
    if (head==null || head.next==null) {
      return head;
    }
  
    const dummy = new ListNode(0); 
    dummy.next = head;
    let prev = dummy;
    let current = head;
  
    while (current!=null) {
      while (current.next && current.val === current.next.val) {
        current = current.next; 
      }
  
      if (prev.next === current) {
        prev = prev.next; 
      } else {
        prev.next = current.next; 
      }
  
      current = current.next;
    }
  
    return dummy.next;
  }

  const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(4);
head.next.next.next.next.next = new ListNode(4);
head.next.next.next.next.next.next = new ListNode(5);

const distinctList = deleteDuplicates(head);

let current = distinctList;
while (current) {
  console.log(current.val);
  current = current.next;
}

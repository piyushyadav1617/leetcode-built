import{a as H,R as g,u as z,r as v,L as C,c as E,b as G}from"./vendor-fb46d3a0.js";import{j as l,a as n,R as Y,m as D,b as T,_ as q,c as x}from"./codemirror-0a942cbd.js";var I={},N=H;I.createRoot=N.createRoot,I.hydrateRoot=N.hydrateRoot;function O({problem:e}){const i=g.useCallback((t,u)=>{},[]);return l("div",{id:"codeEditor",children:[n(Y,{id:"codeMirror",value:e.sample_code,height:"90vh",theme:D,extensions:[T({jsx:!0})],onChange:i}),l("div",{className:"console-compile-btns",children:[n("div",{className:"console-btn",children:n("button",{id:"console-btn",children:"Console"})}),l("div",{className:"run-submit-btn",children:[n("button",{id:"run-btn",children:"Run"}),n("button",{id:"submit-btn",children:"Submit"})]})]})]})}const F=({problem:e})=>l("div",{id:"problem-panel",children:[n("div",{className:"prob-title",children:l("h2",{children:[e.id,": ",e.title]})}),l("div",{className:"prob-desc",children:[n("p",{children:e.description})," "]}),e.examples.map((i,t)=>l("div",{className:"example",children:[l("h3",{children:["Example ",t+1,":"]}),l("div",{className:"example-container",children:[l("p",{children:[n("b",{children:"Input: "}),i.input]}),l("p",{children:[n("b",{children:"Output: "}),i.output]})]})]},t))]});const R=[{id:1,title:"Two Sum",difficulty:"Easy",acceptance_rate:"46.4%",description:"Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",examples:[{input:[2,7,11,15],output:[0,1]},{input:[3,2,4],output:[1,2]}],sample_code:`var twoSum = function(nums, target) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if(map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
};`},{id:2,title:"Add Two Numbers",difficulty:"Medium",acceptance_rate:"35.9%",description:"You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list. You may assume the two numbers do not contain any leading zero, except the number 0 itself.",examples:[{input:[[2,4,3],[5,6,4]],output:[7,0,8]},{input:[[0],[0]],output:[0]}],sample_code:`var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;
    while(l1 !== null || l2 !== null) {
        let x = (l1 !== null) ? l1.val : 0;
        let y = (l2 !== null) ? l2.val : 0;
        let sum = carry + x + y;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        if(l1 !== null) l1 = l1.next;
        if(l2 !== null) l2 = l2.next;
    }
    if(carry > 0) {
        current.next = new ListNode(carry);
    }
    return dummyHead.next;
};`},{id:3,title:"Longest Substring Without Repeating Characters",difficulty:"Medium",acceptance_rate:"30.0%",description:"Given a string s, find the length of the longest substring without repeating characters.",examples:[{input:"s = 'abcabcbb'",output:"3"},{input:"s = 'bbbbb'",output:"1"}],sample_code:`var lengthOfLongestSubstring = function(s) {
  let set = new Set(), left = 0, right = 0, maxLen = 0;
  while (right < s.length) {
    if (!set.has(s.charAt(right))) {
      set.add(s.charAt(right));
      maxLen = Math.max(maxLen, set.size);
      right++;
    } else {
      set.delete(s.charAt(left));
      left++;
    }
  }
  return maxLen;
};`},{id:4,title:"Median of Two Sorted Arrays",difficulty:"Hard",acceptance_rate:"30.0%",description:`Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
Follow up: The overall run time complexity should be O(log (m+n)).`,examples:[{input:"nums1 = [1,3], nums2 = [2]",output:"2.00000"},{input:"nums1 = [1,2], nums2 = [3,4]",output:"2.50000"}],sample_code:`var findMedianSortedArrays = function(nums1, nums2) {
  let len1 = nums1.length, len2 = nums2.length;
  if (len1 > len2) {
    [nums1, nums2] = [nums2, nums1];
    [len1, len2] = [len2, len1];
  }
  let low = 0, high = len1;
  while (low <= high) {
    let partition1 = Math.floor((low + high) / 2);
    let partition2 = Math.floor((len1 + len2 + 1) / 2) - partition1;
    let maxLeft1 = partition1 === 0 ? -Infinity : nums1[partition1 - 1];
    let maxLeft2 = partition2 === 0 ? -Infinity : nums2[partition2 - 1];
    let minRight1 = partition1 === len1 ? Infinity : nums1[partition1];
    let minRight2 = partition2 === len2 ? Infinity : nums2[partition2];
    if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
      if ((len1 + len2) % 2 === 0) {
        return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
      } else {
        return Math.max(maxLeft1, maxLeft2);
      }
    }`},{id:5,title:"Longest Palindromic Substring",difficulty:"Medium",acceptance_rate:"29.3%",description:"Given a string s, return the longest palindromic substring in s.",examples:[{input:"s = 'babad'",output:"'bab'"},{input:"s = 'cbbd'",output:"'bb'"}],sample_code:`var longestPalindrome = function(s) {
  let start = 0, maxLen = 0;
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
      left--;
      right++;
    }
    if (right - left - 1 > maxLen) {
      maxLen = right - left - 1;
      start = left + 1;
    }
  }
  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i, i);
    expandAroundCenter(i, i + 1);
  }
  return s.substring(start, start + maxLen);
};`},{id:6,title:"ZigZag Conversion",difficulty:"Medium",acceptance_rate:"38.7%",description:`The string \`s\` is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

\`\`\`
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Explanation:
P   A   H   N
A P L S I I G
Y   I   R
\`\`\``,examples:[{input:'{ "s": "PAYPALISHIRING", "numRows": 3 }',output:'"PAHNAPLSIIGYIR"'},{input:'{ "s": "PAYPALISHIRING", "numRows": 4 }',output:'"PINALSIGYAHRPI"'}],sample_code:`var convert = function(s, numRows) {
  if (numRows === 1) return s;
  const rows = new Array(numRows).fill('');
  let curRow = 0, goingDown = false;
  for (const c of s) {
    rows[curRow] += c;
    if (curRow === 0 || curRow === numRows - 1) goingDown = !goingDown;
    curRow += goingDown ? 1 : -1;
  }
  return rows.join('');
};`},{id:7,title:"3Sum",difficulty:"Medium",acceptance_rate:"27.9%",description:"Given an integer array nums, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.\n\nNotice that the solution set must not contain duplicate triplets.",examples:[{input:'{ "nums": [-1,0,1,2,-1,-4] }',output:"[[-1,-1,2],[-1,0,1]]"},{input:'{ "nums": [] }',output:"[]"}],sample_code:`var threeSum = function(nums) {
  const res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let j = i + 1, k = nums.length - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        res.push([nums[i], nums[j], nums[k]]);
        while (j < k && nums[j] === nums[j + 1]) j++;
        while (j < k && nums[k] === nums[k - 1]) k--;
        j++, k--;
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }
  return res;
};`},{id:8,title:"Maximum Subarray",difficulty:"Easy",acceptance_rate:"52.5%",description:`Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.`,examples:[{input:'{ "nums": [-2,1,-3,4,-1,2,1,-5,4] }',output:"6"},{input:'{ "nums": [1] }',output:"1"}],sample_code:`var maxSubArray = function(nums) {
  let maxSoFar = nums[0];
  let maxEndingHere = nums[0];
  for (let i = 1; i < nums.length; i++) {
    maxEndingHere = Math.max(maxEndingHere + nums[i], nums[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  return maxSoFar;
};`},{id:9,title:"Regular Expression Matching",difficulty:"Hard",acceptance_rate:"28.9%",description:`Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*' where:

'.' Matches any single character.
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

Note:

s could be empty and contains only lowercase letters a-z.
p could be empty and contains only lowercase letters a-z, and characters like . or *.`,examples:[{input:'{ "s": "aa", "p": "a" }',output:"false"},{input:'{ "s": "aa", "p": ".*" }',output:"true"}],sample_code:`var isMatch = function(s, p) {
  if (p.length === 0) return s.length === 0;
  const firstMatch = s.length > 0 && (p[0] === s[0] || p[0] === '.');
  if (p.length >= 2 && p[1] === '*') {
    return isMatch(s, p.substring(2)) || (firstMatch && isMatch(s.substring(1), p));
  } else {
    return firstMatch && isMatch(s.substring(1), p.substring(1));
  }
};`},{id:10,title:"Word Ladder",difficulty:"Medium",acceptance_rate:"28.5%",description:`Given two words beginWord and endWord, and a dictionary wordList, return the length of the shortest transformation sequence from beginWord to endWord, such that:

Only one letter can be changed at a time.
Each transformed word must exist in the word list. Note that beginWord is not a transformed word.

Note:

Return 0 if there is no such transformation sequence.
All words have the same length.
All words contain only lowercase alphabetic characters.
You may assume no duplicates in the word list.
You may assume beginWord and endWord are non-empty and are not the same.`,examples:[{input:'{ "beginWord": "hit", "endWord": "cog", "wordList": ["hot","dot","dog","lot","log","cog"] }',output:"5"},{input:'{ "beginWord": "hit", "endWord": "cog", "wordList": ["hot","dot","dog","lot","log"] }',output:"0"}],sample_code:`var ladderLength = function(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;
  const visited = new Set();
  visited.add(beginWord);
  let queue = [beginWord];
  let level = 1;
  while (queue.length > 0) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const currWord = queue.shift();
      if (currWord === endWord) return level;
      for (let j = 0; j < currWord.length; j++) {
        for (let k = 0; k < 26; k++) {
          const nextChar = String.fromCharCode(97 + k);
          const newWord = currWord.slice(0, j) + nextChar + currWord.slice(j + 1);
          if (wordSet.has(newWord) && !visited.has(newWord)) {
            visited.add(newWord);
            queue.push(newWord);
          }
        }
      }
    }
    level++;
  }
  return 0;
};`},{id:11,title:"3Sum Closest",difficulty:"Medium",acceptance_rate:"39.5%",description:"Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.",examples:[{input:'{ "nums": [-1,2,1,-4], "target": 1 }',output:"2"},{input:'{ "nums": [0,0,0], "target": 1 }',output:"0"}],sample_code:`var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);
  let closestSum = Infinity;
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1, right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (Math.abs(target - sum) < Math.abs(target - closestSum)) closestSum = sum;
      if (sum === target) return target;
      if (sum < target) left++;
      else right--;
    }
  }
  return closestSum;
};`},{id:12,title:"Spiral Matrix",difficulty:"Medium",acceptance_rate:"37.4%",description:"Given an m x n matrix, return all elements of the matrix in spiral order.",examples:[{input:"[[1,2,3],[4,5,6],[7,8,9]]",output:"[1,2,3,6,9,8,7,4,5]"},{input:"[[1,2],[3,4]]",output:"[1,2,4,3]"}],sample_code:`var spiralOrder = function(matrix) {
  const result = [];
  let top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1, direction = 'right';
  while (top <= bottom && left <= right) {
    if (direction === 'right') {
      for (let i = left; i <= right; i++) {
        result.push(matrix[top][i]);
      }
      top++;
      direction = 'down';
    } else if (direction === 'down') {
      for (let i = top; i <= bottom; i++) {
        result.push(matrix[i][right]);
      }
      right--;
      direction = 'left';
    } else if (direction === 'left') {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
      direction = 'up';
    } else if (direction === 'up') {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
      direction = 'right';
    }
  }
  return result;
};`},{id:13,title:"Two Sum",difficulty:"Easy",acceptance_rate:"46.4%",description:"Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",examples:[{input:[2,7,11,15],output:[0,1]},{input:[3,2,4],output:[1,2]}],sample_code:`var twoSum = function(nums, target) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if(map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
};`},{id:14,title:"Add Two Numbers",difficulty:"Medium",acceptance_rate:"35.9%",description:"You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list. You may assume the two numbers do not contain any leading zero, except the number 0 itself.",examples:[{input:[[2,4,3],[5,6,4]],output:[7,0,8]},{input:[[0],[0]],output:[0]}],sample_code:`var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;
    while(l1 !== null || l2 !== null) {
        let x = (l1 !== null) ? l1.val : 0;
        let y = (l2 !== null) ? l2.val : 0;
        let sum = carry + x + y;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        if(l1 !== null) l1 = l1.next;
        if(l2 !== null) l2 = l2.next;
    }
    if(carry > 0) {
        current.next = new ListNode(carry);
    }
    return dummyHead.next;
};`},{id:15,title:"Longest Substring Without Repeating Characters",difficulty:"Medium",acceptance_rate:"30.0%",description:"Given a string s, find the length of the longest substring without repeating characters.",examples:[{input:"s = 'abcabcbb'",output:"3"},{input:"s = 'bbbbb'",output:"1"}],sample_code:`var lengthOfLongestSubstring = function(s) {
  let set = new Set(), left = 0, right = 0, maxLen = 0;
  while (right < s.length) {
    if (!set.has(s.charAt(right))) {
      set.add(s.charAt(right));
      maxLen = Math.max(maxLen, set.size);
      right++;
    } else {
      set.delete(s.charAt(left));
      left++;
    }
  }
  return maxLen;
};`},{id:16,title:"Median of Two Sorted Arrays",difficulty:"Hard",acceptance_rate:"30.0%",description:`Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
Follow up: The overall run time complexity should be O(log (m+n)).`,examples:[{input:"nums1 = [1,3], nums2 = [2]",output:"2.00000"},{input:"nums1 = [1,2], nums2 = [3,4]",output:"2.50000"}],sample_code:`var findMedianSortedArrays = function(nums1, nums2) {
  let len1 = nums1.length, len2 = nums2.length;
  if (len1 > len2) {
    [nums1, nums2] = [nums2, nums1];
    [len1, len2] = [len2, len1];
  }
  let low = 0, high = len1;
  while (low <= high) {
    let partition1 = Math.floor((low + high) / 2);
    let partition2 = Math.floor((len1 + len2 + 1) / 2) - partition1;
    let maxLeft1 = partition1 === 0 ? -Infinity : nums1[partition1 - 1];
    let maxLeft2 = partition2 === 0 ? -Infinity : nums2[partition2 - 1];
    let minRight1 = partition1 === len1 ? Infinity : nums1[partition1];
    let minRight2 = partition2 === len2 ? Infinity : nums2[partition2];
    if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
      if ((len1 + len2) % 2 === 0) {
        return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
      } else {
        return Math.max(maxLeft1, maxLeft2);
      }
    }`},{id:17,title:"Longest Palindromic Substring",difficulty:"Medium",acceptance_rate:"29.3%",description:"Given a string s, return the longest palindromic substring in s.",examples:[{input:"s = 'babad'",output:"'bab'"},{input:"s = 'cbbd'",output:"'bb'"}],sample_code:`var longestPalindrome = function(s) {
  let start = 0, maxLen = 0;
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
      left--;
      right++;
    }
    if (right - left - 1 > maxLen) {
      maxLen = right - left - 1;
      start = left + 1;
    }
  }
  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i, i);
    expandAroundCenter(i, i + 1);
  }
  return s.substring(start, start + maxLen);
};`},{id:18,title:"ZigZag Conversion",difficulty:"Medium",acceptance_rate:"38.7%",description:`The string \`s\` is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

\`\`\`
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Explanation:
P   A   H   N
A P L S I I G
Y   I   R
\`\`\``,examples:[{input:'{ "s": "PAYPALISHIRING", "numRows": 3 }',output:'"PAHNAPLSIIGYIR"'},{input:'{ "s": "PAYPALISHIRING", "numRows": 4 }',output:'"PINALSIGYAHRPI"'}],sample_code:`var convert = function(s, numRows) {
  if (numRows === 1) return s;
  const rows = new Array(numRows).fill('');
  let curRow = 0, goingDown = false;
  for (const c of s) {
    rows[curRow] += c;
    if (curRow === 0 || curRow === numRows - 1) goingDown = !goingDown;
    curRow += goingDown ? 1 : -1;
  }
  return rows.join('');
};`},{id:19,title:"3Sum",difficulty:"Medium",acceptance_rate:"27.9%",description:"Given an integer array nums, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.\n\nNotice that the solution set must not contain duplicate triplets.",examples:[{input:'{ "nums": [-1,0,1,2,-1,-4] }',output:"[[-1,-1,2],[-1,0,1]]"},{input:'{ "nums": [] }',output:"[]"}],sample_code:`var threeSum = function(nums) {
  const res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let j = i + 1, k = nums.length - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        res.push([nums[i], nums[j], nums[k]]);
        while (j < k && nums[j] === nums[j + 1]) j++;
        while (j < k && nums[k] === nums[k - 1]) k--;
        j++, k--;
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }
  return res;
};`},{id:20,title:"Maximum Subarray",difficulty:"Easy",acceptance_rate:"52.5%",description:`Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.`,examples:[{input:'{ "nums": [-2,1,-3,4,-1,2,1,-5,4] }',output:"6"},{input:'{ "nums": [1] }',output:"1"}],sample_code:`var maxSubArray = function(nums) {
  let maxSoFar = nums[0];
  let maxEndingHere = nums[0];
  for (let i = 1; i < nums.length; i++) {
    maxEndingHere = Math.max(maxEndingHere + nums[i], nums[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  return maxSoFar;
};`},{id:21,title:"Regular Expression Matching",difficulty:"Hard",acceptance_rate:"28.9%",description:`Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*' where:

'.' Matches any single character.
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

Note:

s could be empty and contains only lowercase letters a-z.
p could be empty and contains only lowercase letters a-z, and characters like . or *.`,examples:[{input:'{ "s": "aa", "p": "a" }',output:"false"},{input:'{ "s": "aa", "p": ".*" }',output:"true"}],sample_code:`var isMatch = function(s, p) {
  if (p.length === 0) return s.length === 0;
  const firstMatch = s.length > 0 && (p[0] === s[0] || p[0] === '.');
  if (p.length >= 2 && p[1] === '*') {
    return isMatch(s, p.substring(2)) || (firstMatch && isMatch(s.substring(1), p));
  } else {
    return firstMatch && isMatch(s.substring(1), p.substring(1));
  }
};`},{id:22,title:"Word Ladder",difficulty:"Medium",acceptance_rate:"28.5%",description:`Given two words beginWord and endWord, and a dictionary wordList, return the length of the shortest transformation sequence from beginWord to endWord, such that:

Only one letter can be changed at a time.
Each transformed word must exist in the word list. Note that beginWord is not a transformed word.

Note:

Return 0 if there is no such transformation sequence.
All words have the same length.
All words contain only lowercase alphabetic characters.
You may assume no duplicates in the word list.
You may assume beginWord and endWord are non-empty and are not the same.`,examples:[{input:'{ "beginWord": "hit", "endWord": "cog", "wordList": ["hot","dot","dog","lot","log","cog"] }',output:"5"},{input:'{ "beginWord": "hit", "endWord": "cog", "wordList": ["hot","dot","dog","lot","log"] }',output:"0"}],sample_code:`var ladderLength = function(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;
  const visited = new Set();
  visited.add(beginWord);
  let queue = [beginWord];
  let level = 1;
  while (queue.length > 0) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const currWord = queue.shift();
      if (currWord === endWord) return level;
      for (let j = 0; j < currWord.length; j++) {
        for (let k = 0; k < 26; k++) {
          const nextChar = String.fromCharCode(97 + k);
          const newWord = currWord.slice(0, j) + nextChar + currWord.slice(j + 1);
          if (wordSet.has(newWord) && !visited.has(newWord)) {
            visited.add(newWord);
            queue.push(newWord);
          }
        }
      }
    }
    level++;
  }
  return 0;
};`},{id:23,title:"3Sum Closest",difficulty:"Medium",acceptance_rate:"39.5%",description:"Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.",examples:[{input:'{ "nums": [-1,2,1,-4], "target": 1 }',output:"2"},{input:'{ "nums": [0,0,0], "target": 1 }',output:"0"}],sample_code:`var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);
  let closestSum = Infinity;
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1, right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (Math.abs(target - sum) < Math.abs(target - closestSum)) closestSum = sum;
      if (sum === target) return target;
      if (sum < target) left++;
      else right--;
    }
  }
  return closestSum;
};`},{id:24,title:"Spiral Matrix",difficulty:"Medium",acceptance_rate:"37.4%",description:"Given an m x n matrix, return all elements of the matrix in spiral order.",examples:[{input:"[[1,2,3],[4,5,6],[7,8,9]]",output:"[1,2,3,6,9,8,7,4,5]"},{input:"[[1,2],[3,4]]",output:"[1,2,4,3]"}],sample_code:`var spiralOrder = function(matrix) {
  const result = [];
  let top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1, direction = 'right';
  while (top <= bottom && left <= right) {
    if (direction === 'right') {
      for (let i = left; i <= right; i++) {
        result.push(matrix[top][i]);
      }
      top++;
      direction = 'down';
    } else if (direction === 'down') {
      for (let i = top; i <= bottom; i++) {
        result.push(matrix[i][right]);
      }
      right--;
      direction = 'left';
    } else if (direction === 'left') {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
      direction = 'up';
    } else if (direction === 'up') {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
      direction = 'right';
    }
  }
  return result;
};`},{id:25,title:"Two Sum",difficulty:"Easy",acceptance_rate:"46.4%",description:"Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",examples:[{input:[2,7,11,15],output:[0,1]},{input:[3,2,4],output:[1,2]}],sample_code:`var twoSum = function(nums, target) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if(map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
};`},{id:26,title:"Add Two Numbers",difficulty:"Medium",acceptance_rate:"35.9%",description:"You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list. You may assume the two numbers do not contain any leading zero, except the number 0 itself.",examples:[{input:[[2,4,3],[5,6,4]],output:[7,0,8]},{input:[[0],[0]],output:[0]}],sample_code:`var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;
    while(l1 !== null || l2 !== null) {
        let x = (l1 !== null) ? l1.val : 0;
        let y = (l2 !== null) ? l2.val : 0;
        let sum = carry + x + y;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        if(l1 !== null) l1 = l1.next;
        if(l2 !== null) l2 = l2.next;
    }
    if(carry > 0) {
        current.next = new ListNode(carry);
    }
    return dummyHead.next;
};`},{id:27,title:"Longest Substring Without Repeating Characters",difficulty:"Medium",acceptance_rate:"30.0%",description:"Given a string s, find the length of the longest substring without repeating characters.",examples:[{input:"s = 'abcabcbb'",output:"3"},{input:"s = 'bbbbb'",output:"1"}],sample_code:`var lengthOfLongestSubstring = function(s) {
  let set = new Set(), left = 0, right = 0, maxLen = 0;
  while (right < s.length) {
    if (!set.has(s.charAt(right))) {
      set.add(s.charAt(right));
      maxLen = Math.max(maxLen, set.size);
      right++;
    } else {
      set.delete(s.charAt(left));
      left++;
    }
  }
  return maxLen;
};`},{id:28,title:"Median of Two Sorted Arrays",difficulty:"Hard",acceptance_rate:"30.0%",description:`Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
Follow up: The overall run time complexity should be O(log (m+n)).`,examples:[{input:"nums1 = [1,3], nums2 = [2]",output:"2.00000"},{input:"nums1 = [1,2], nums2 = [3,4]",output:"2.50000"}],sample_code:`var findMedianSortedArrays = function(nums1, nums2) {
  let len1 = nums1.length, len2 = nums2.length;
  if (len1 > len2) {
    [nums1, nums2] = [nums2, nums1];
    [len1, len2] = [len2, len1];
  }
  let low = 0, high = len1;
  while (low <= high) {
    let partition1 = Math.floor((low + high) / 2);
    let partition2 = Math.floor((len1 + len2 + 1) / 2) - partition1;
    let maxLeft1 = partition1 === 0 ? -Infinity : nums1[partition1 - 1];
    let maxLeft2 = partition2 === 0 ? -Infinity : nums2[partition2 - 1];
    let minRight1 = partition1 === len1 ? Infinity : nums1[partition1];
    let minRight2 = partition2 === len2 ? Infinity : nums2[partition2];
    if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
      if ((len1 + len2) % 2 === 0) {
        return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
      } else {
        return Math.max(maxLeft1, maxLeft2);
      }
    }`},{id:29,title:"Longest Palindromic Substring",difficulty:"Medium",acceptance_rate:"29.3%",description:"Given a string s, return the longest palindromic substring in s.",examples:[{input:"s = 'babad'",output:"'bab'"},{input:"s = 'cbbd'",output:"'bb'"}],sample_code:`var longestPalindrome = function(s) {
  let start = 0, maxLen = 0;
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
      left--;
      right++;
    }
    if (right - left - 1 > maxLen) {
      maxLen = right - left - 1;
      start = left + 1;
    }
  }
  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i, i);
    expandAroundCenter(i, i + 1);
  }
  return s.substring(start, start + maxLen);
};`},{id:30,title:"ZigZag Conversion",difficulty:"Medium",acceptance_rate:"38.7%",description:`The string \`s\` is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

\`\`\`
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Explanation:
P   A   H   N
A P L S I I G
Y   I   R
\`\`\``,examples:[{input:'{ "s": "PAYPALISHIRING", "numRows": 3 }',output:'"PAHNAPLSIIGYIR"'},{input:'{ "s": "PAYPALISHIRING", "numRows": 4 }',output:'"PINALSIGYAHRPI"'}],sample_code:`var convert = function(s, numRows) {
  if (numRows === 1) return s;
  const rows = new Array(numRows).fill('');
  let curRow = 0, goingDown = false;
  for (const c of s) {
    rows[curRow] += c;
    if (curRow === 0 || curRow === numRows - 1) goingDown = !goingDown;
    curRow += goingDown ? 1 : -1;
  }
  return rows.join('');
};`},{id:31,title:"3Sum",difficulty:"Medium",acceptance_rate:"27.9%",description:"Given an integer array nums, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.\n\nNotice that the solution set must not contain duplicate triplets.",examples:[{input:'{ "nums": [-1,0,1,2,-1,-4] }',output:"[[-1,-1,2],[-1,0,1]]"},{input:'{ "nums": [] }',output:"[]"}],sample_code:`var threeSum = function(nums) {
  const res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let j = i + 1, k = nums.length - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        res.push([nums[i], nums[j], nums[k]]);
        while (j < k && nums[j] === nums[j + 1]) j++;
        while (j < k && nums[k] === nums[k - 1]) k--;
        j++, k--;
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }
  return res;
};`},{id:32,title:"Maximum Subarray",difficulty:"Easy",acceptance_rate:"52.5%",description:`Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.`,examples:[{input:'{ "nums": [-2,1,-3,4,-1,2,1,-5,4] }',output:"6"},{input:'{ "nums": [1] }',output:"1"}],sample_code:`var maxSubArray = function(nums) {
  let maxSoFar = nums[0];
  let maxEndingHere = nums[0];
  for (let i = 1; i < nums.length; i++) {
    maxEndingHere = Math.max(maxEndingHere + nums[i], nums[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  return maxSoFar;
};`},{id:33,title:"Regular Expression Matching",difficulty:"Hard",acceptance_rate:"28.9%",description:`Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*' where:

'.' Matches any single character.
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

Note:

s could be empty and contains only lowercase letters a-z.
p could be empty and contains only lowercase letters a-z, and characters like . or *.`,examples:[{input:'{ "s": "aa", "p": "a" }',output:"false"},{input:'{ "s": "aa", "p": ".*" }',output:"true"}],sample_code:`var isMatch = function(s, p) {
  if (p.length === 0) return s.length === 0;
  const firstMatch = s.length > 0 && (p[0] === s[0] || p[0] === '.');
  if (p.length >= 2 && p[1] === '*') {
    return isMatch(s, p.substring(2)) || (firstMatch && isMatch(s.substring(1), p));
  } else {
    return firstMatch && isMatch(s.substring(1), p.substring(1));
  }
};`},{id:34,title:"Word Ladder",difficulty:"Medium",acceptance_rate:"28.5%",description:`Given two words beginWord and endWord, and a dictionary wordList, return the length of the shortest transformation sequence from beginWord to endWord, such that:

Only one letter can be changed at a time.
Each transformed word must exist in the word list. Note that beginWord is not a transformed word.

Note:

Return 0 if there is no such transformation sequence.
All words have the same length.
All words contain only lowercase alphabetic characters.
You may assume no duplicates in the word list.
You may assume beginWord and endWord are non-empty and are not the same.`,examples:[{input:'{ "beginWord": "hit", "endWord": "cog", "wordList": ["hot","dot","dog","lot","log","cog"] }',output:"5"},{input:'{ "beginWord": "hit", "endWord": "cog", "wordList": ["hot","dot","dog","lot","log"] }',output:"0"}],sample_code:`var ladderLength = function(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;
  const visited = new Set();
  visited.add(beginWord);
  let queue = [beginWord];
  let level = 1;
  while (queue.length > 0) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const currWord = queue.shift();
      if (currWord === endWord) return level;
      for (let j = 0; j < currWord.length; j++) {
        for (let k = 0; k < 26; k++) {
          const nextChar = String.fromCharCode(97 + k);
          const newWord = currWord.slice(0, j) + nextChar + currWord.slice(j + 1);
          if (wordSet.has(newWord) && !visited.has(newWord)) {
            visited.add(newWord);
            queue.push(newWord);
          }
        }
      }
    }
    level++;
  }
  return 0;
};`},{id:35,title:"3Sum Closest",difficulty:"Medium",acceptance_rate:"39.5%",description:"Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.",examples:[{input:'{ "nums": [-1,2,1,-4], "target": 1 }',output:"2"},{input:'{ "nums": [0,0,0], "target": 1 }',output:"0"}],sample_code:`var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);
  let closestSum = Infinity;
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1, right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (Math.abs(target - sum) < Math.abs(target - closestSum)) closestSum = sum;
      if (sum === target) return target;
      if (sum < target) left++;
      else right--;
    }
  }
  return closestSum;
};`},{id:36,title:"Spiral Matrix",difficulty:"Medium",acceptance_rate:"37.4%",description:"Given an m x n matrix, return all elements of the matrix in spiral order.",examples:[{input:"[[1,2,3],[4,5,6],[7,8,9]]",output:"[1,2,3,6,9,8,7,4,5]"},{input:"[[1,2],[3,4]]",output:"[1,2,4,3]"}],sample_code:`var spiralOrder = function(matrix) {
  const result = [];
  let top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1, direction = 'right';
  while (top <= bottom && left <= right) {
    if (direction === 'right') {
      for (let i = left; i <= right; i++) {
        result.push(matrix[top][i]);
      }
      top++;
      direction = 'down';
    } else if (direction === 'down') {
      for (let i = top; i <= bottom; i++) {
        result.push(matrix[i][right]);
      }
      right--;
      direction = 'left';
    } else if (direction === 'left') {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
      direction = 'up';
    } else if (direction === 'up') {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
      direction = 'right';
    }
  }
  return result;
};`},{id:37,title:"Median of Two Sorted Arrays",difficulty:"Hard",acceptance_rate:"30.0%",description:`Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
Follow up: The overall run time complexity should be O(log (m+n)).`,examples:[{input:"nums1 = [1,3], nums2 = [2]",output:"2.00000"},{input:"nums1 = [1,2], nums2 = [3,4]",output:"2.50000"}],sample_code:`var findMedianSortedArrays = function(nums1, nums2) {
  let len1 = nums1.length, len2 = nums2.length;
  if (len1 > len2) {
    [nums1, nums2] = [nums2, nums1];
    [len1, len2] = [len2, len1];
  }
  let low = 0, high = len1;
  while (low <= high) {
    let partition1 = Math.floor((low + high) / 2);
    let partition2 = Math.floor((len1 + len2 + 1) / 2) - partition1;
    let maxLeft1 = partition1 === 0 ? -Infinity : nums1[partition1 - 1];
    let maxLeft2 = partition2 === 0 ? -Infinity : nums2[partition2 - 1];
    let minRight1 = partition1 === len1 ? Infinity : nums1[partition1];
    let minRight2 = partition2 === len2 ? Infinity : nums2[partition2];
    if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
      if ((len1 + len2) % 2 === 0) {
        return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
      } else {
        return Math.max(maxLeft1, maxLeft2);
      }
    }`},{id:38,title:"Longest Palindromic Substring",difficulty:"Medium",acceptance_rate:"29.3%",description:"Given a string s, return the longest palindromic substring in s.",examples:[{input:"s = 'babad'",output:"'bab'"},{input:"s = 'cbbd'",output:"'bb'"}],sample_code:`var longestPalindrome = function(s) {
  let start = 0, maxLen = 0;
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
      left--;
      right++;
    }
    if (right - left - 1 > maxLen) {
      maxLen = right - left - 1;
      start = left + 1;
    }
  }
  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i, i);
    expandAroundCenter(i, i + 1);
  }
  return s.substring(start, start + maxLen);
};`},{id:39,title:"ZigZag Conversion",difficulty:"Medium",acceptance_rate:"38.7%",description:`The string \`s\` is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

\`\`\`
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Explanation:
P   A   H   N
A P L S I I G
Y   I   R
\`\`\``,examples:[{input:'{ "s": "PAYPALISHIRING", "numRows": 3 }',output:'"PAHNAPLSIIGYIR"'},{input:'{ "s": "PAYPALISHIRING", "numRows": 4 }',output:'"PINALSIGYAHRPI"'}],sample_code:`var convert = function(s, numRows) {
  if (numRows === 1) return s;
  const rows = new Array(numRows).fill('');
  let curRow = 0, goingDown = false;
  for (const c of s) {
    rows[curRow] += c;
    if (curRow === 0 || curRow === numRows - 1) goingDown = !goingDown;
    curRow += goingDown ? 1 : -1;
  }
  return rows.join('');
};`},{id:40,title:"3Sum",difficulty:"Medium",acceptance_rate:"27.9%",description:"Given an integer array nums, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.\n\nNotice that the solution set must not contain duplicate triplets.",examples:[{input:'{ "nums": [-1,0,1,2,-1,-4] }',output:"[[-1,-1,2],[-1,0,1]]"},{input:'{ "nums": [] }',output:"[]"}],sample_code:`var threeSum = function(nums) {
  const res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let j = i + 1, k = nums.length - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        res.push([nums[i], nums[j], nums[k]]);
        while (j < k && nums[j] === nums[j + 1]) j++;
        while (j < k && nums[k] === nums[k - 1]) k--;
        j++, k--;
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }
  }
  return res;
};`}];var B=["prefixCls","className","children","mode","visiable","renderBar","lineBar","disable","onDragEnd","onDragging"];class k extends g.Component{constructor(i){super(i),this.state={dragging:!1},this.warpper=void 0,this.paneNumber=void 0,this.startX=void 0,this.startY=void 0,this.move=void 0,this.target=void 0,this.boxWidth=void 0,this.boxHeight=void 0,this.preWidth=void 0,this.nextWidth=void 0,this.preHeight=void 0,this.nextHeight=void 0,this.preSize=void 0,this.nextSize=void 0,this.onDragEnd=this.onDragEnd.bind(this),this.onDragging=this.onDragging.bind(this)}componentWillUnmount(){this.removeEvent()}removeEvent(){window.removeEventListener("mousemove",this.onDragging,!1),window.removeEventListener("mouseup",this.onDragEnd,!1)}onMouseDown(i,t){if(!(!t.target||!this.warpper)){this.paneNumber=i,this.startX=t.clientX,this.startY=t.clientY,this.move=!0,this.target=t.target.parentNode;var u=this.target.previousElementSibling,a=this.target.nextElementSibling;this.boxWidth=this.warpper.clientWidth,this.boxHeight=this.warpper.clientHeight,u&&(this.preWidth=u.clientWidth,this.preHeight=u.clientHeight),a&&(this.nextWidth=a.clientWidth,this.nextHeight=a.clientHeight),window.addEventListener("mousemove",this.onDragging),window.addEventListener("mouseup",this.onDragEnd,!1),this.setState({dragging:!0})}}onDragging(i){if(this.move){this.state.dragging||this.setState({dragging:!0});var{mode:t,onDragging:u}=this.props,a=this.target.nextElementSibling,r=this.target.previousElementSibling,o=i.clientX-this.startX,s=i.clientY-this.startY;if(this.preSize=0,this.nextSize=0,t==="horizontal"){if(this.preSize=this.preWidth+o>-1?this.preWidth+o:0,this.nextSize=this.nextWidth-o>-1?this.nextWidth-o:0,this.preSize===0||this.nextSize===0)return;this.preSize=(this.preSize/this.boxWidth>=1?1:this.preSize/this.boxWidth)*100,this.nextSize=(this.nextSize/this.boxWidth>=1?1:this.nextSize/this.boxWidth)*100,r&&a&&(r.style.width=this.preSize+"%",a.style.width=this.nextSize+"%")}if(t==="vertical"&&this.preHeight+s>-1&&this.nextHeight-s>-1){if(this.preSize=this.preHeight+s>-1?this.preHeight+s:0,this.nextSize=this.nextHeight-s>-1?this.nextHeight-s:0,this.preSize=(this.preSize/this.boxHeight>=1?1:this.preSize/this.boxHeight)*100,this.nextSize=(this.nextSize/this.boxHeight>=1?1:this.nextSize/this.boxHeight)*100,this.preSize===0||this.nextSize===0)return;r&&a&&(r.style.height=this.preSize+"%",a.style.height=this.nextSize+"%")}u&&u(this.preSize,this.nextSize,this.paneNumber)}}onDragEnd(){var{onDragEnd:i}=this.props;this.move=!1,i&&i(this.preSize,this.nextSize,this.paneNumber),this.removeEvent(),this.setState({dragging:!1})}render(){var i=this.props,{prefixCls:t,className:u,children:a,mode:r,visiable:o,renderBar:s,lineBar:d,disable:c}=i,h=q(i,B),{dragging:m}=this.state,M=[t,u,t+"-"+r,m?"dragging":null].filter(Boolean).join(" ").trim(),f=g.Children.toArray(a);return n("div",x({className:M},h,{ref:p=>this.warpper=p,children:g.Children.map(f,(p,w)=>{var _=Object.assign({},p.props,{className:[t+"-pane",p.props.className].filter(Boolean).join(" ").trim(),style:x({},p.props.style)}),W=o===!0||o&&o.includes(w+1)||!1,y={className:[t+"-bar",d?t+"-line-bar":null,d?null:t+"-large-bar"].filter(Boolean).join(" ").trim()};(c===!0||c&&c.includes(w+1))&&(y.className=[y.className,c?"disable":null].filter(Boolean).join(" ").trim());var A=null;return w!==0&&W&&s?A=s(x({},y,{onMouseDown:this.onMouseDown.bind(this,w+1)})):w!==0&&W&&(A=g.createElement("div",x({},y),n("div",{onMouseDown:this.onMouseDown.bind(this,w+1)}))),l(g.Fragment,{children:[A,g.cloneElement(p,x({},_))]},w)})}))}}k.defaultProps={prefixCls:"w-split",visiable:!0,mode:"horizontal"};function Z(){const{id:e}=z(),i=R.find(s=>s.id==e),[t,u]=v.useState(!1),a={backgroundColor:"#1d1d1d"},o=t?{...a,...{backgroundColor:"#1b7fcb"}}:a;return n("div",{id:"problemPage",children:l(k,{style:{height:"100vh"},renderBar:({onMouseDown:s,...d})=>n("div",{...d,onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1),style:{background:"transparent",width:"7px"},children:n("div",{onMouseDown:s,style:o})}),children:[n(F,{problem:i}),n(O,{problem:i})]})})}const $=({problem:e,bgClass:i,diffClass:t})=>l("div",{className:`problem-container ${i}`,children:[l("div",{className:"title",children:[" ",n(C,{id:"problem-link",to:`/${e.id}`,children:l("p",{children:[e.id,". ",e.title]})})]}),n("div",{className:"acceptance",children:n("p",{children:e.acceptance_rate})}),l("div",{className:"difficulty",children:[" ",n("p",{className:t,children:e.difficulty})," "]})]},e.id);var P={},U={get exports(){return P},set exports(e){P=e}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var i={}.hasOwnProperty;function t(){for(var u=[],a=0;a<arguments.length;a++){var r=arguments[a];if(r){var o=typeof r;if(o==="string"||o==="number")u.push(r);else if(Array.isArray(r)){if(r.length){var s=t.apply(null,r);s&&u.push(s)}}else if(o==="object"){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){u.push(r.toString());continue}for(var d in r)i.call(r,d)&&r[d]&&u.push(d)}}}return u.join(" ")}e.exports?(t.default=t,e.exports=t):window.classNames=t})()})(U);const S=P,L=(e,i)=>{let t=i-e+1;return Array.from({length:t},(u,a)=>a+e)},b="...",X=({totalCount:e,pageSize:i,siblingCount:t=1,currentPage:u})=>v.useMemo(()=>{const r=Math.ceil(e/i);if(t+5>=r)return L(1,r);const s=Math.max(u-t,1),d=Math.min(u+t,r),c=s>2,h=d<r-2,m=1,M=r;if(!c&&h){let f=3+2*t;return[...L(1,f),b,r]}if(c&&!h){let f=3+2*t,p=L(r-f+1,r);return[m,b,...p]}if(c&&h){let f=L(s,d);return[m,b,...f,b,M]}},[e,i,t,u]);const V=e=>{const{onPageChange:i,totalCount:t,siblingCount:u=1,currentPage:a,pageSize:r,className:o}=e,s=X({currentPage:a,totalCount:t,siblingCount:u,pageSize:r});if(a===0||s.length<2)return null;const d=()=>{i(a+1)},c=()=>{i(a-1)};let h=s[s.length-1];return l("ul",{className:S("pagination-container",{[o]:o}),children:[n("li",{className:S("pagination-item",{disabled:a===1}),onClick:c,children:n("div",{className:"arrow left"})},"prev"),s.map(m=>m===b?n("li",{className:"pagination-item dots",children:"…"},Math.random()):n("li",{className:S("pagination-item",{selected:m===a}),onClick:()=>i(m),children:m},m)),n("li",{className:S("pagination-item",{disabled:a===h}),onClick:d,children:n("div",{className:"arrow right"})},"next")]})},J=()=>{const[e,i]=v.useState(10),[t,u]=v.useState(1),a=v.useMemo(()=>{const o=(t-1)*e,s=o+e;return R.slice(o,s)},[t,e]);function r(o){const s=parseInt(o.target.value),d=Math.ceil(R.length/s),c=Math.min(t,d);i(s),u(c)}return l("div",{id:"problems",children:[l("div",{className:"problems-header",children:[n("div",{className:"title",children:n("p",{children:"Title"})}),n("div",{className:"acceptance",children:n("p",{children:"Acceptance"})}),n("div",{className:"difficulty",children:n("p",{children:"Difficulty"})})]}),a.map((o,s)=>{const c=s%2===0?"even":"odd";let h=o.difficulty,m;return h==="Hard"?m="red":h==="Medium"?m="yellow":m="green",n($,{problem:o,bgClass:c,diffClass:m},o.id)}),l("div",{className:"pagination-box",children:[n("div",{className:"pagination-limit",children:l("select",{name:"pageSize",id:"pageSize",value:e,onChange:r,children:[n("option",{value:5,children:"5 / page"}),n("option",{defaultValue:!0,value:10,children:"10 / page"}),n("option",{value:20,children:"20 / page"})]})}),n("div",{className:"pagination-buttons",children:n(V,{className:"pagination-bar",currentPage:t,totalCount:R.length,pageSize:e,onPageChange:o=>u(o)})})]})]})},K=()=>n("div",{id:"problemsListPage",children:n(J,{})});const j="/assets/leetcode_logo-94e3af26.svg",Q=()=>l("div",{className:"signin-container",children:[n("div",{className:"logo",children:n("img",{src:j,alt:"logo"})}),l("form",{className:"form-signin",children:[n("input",{type:"email",id:"inputEmail",placeholder:"Email address",required:!0,autoFocus:!0}),n("input",{type:"password",id:"inputPassword",className:"",placeholder:"Password",required:!0}),n("button",{id:"btn-signin",type:"submit",children:"Sign in"})]})]});const nn=()=>n("div",{id:"signInPage",children:n(Q,{})});const tn=()=>l("div",{className:"signup-container",children:[n("div",{className:"logo",children:n("img",{src:j,alt:"logo"})}),l("form",{className:"form-signup",children:[n("input",{type:"email",id:"inputEmail",placeholder:"Email address",required:!0,autoFocus:!0}),n("input",{type:"password",id:"inputPassword",placeholder:"Password",required:!0}),n("input",{type:"password",id:"inputPassword",placeholder:" Confirm Password",required:!0}),n("button",{id:"btn-signup",type:"submit",children:"Sign up"})]})]});const en=()=>n("div",{id:"signUpPage",children:n(tn,{})}),rn=E([{path:"/",element:n(nn,{})},{path:"/signup",element:n(en,{})},{path:"/problems",element:n(K,{})},{path:"/:id",element:n(Z,{})}]);function sn(){return n(G,{router:rn})}I.createRoot(document.getElementById("root")).render(n(g.StrictMode,{children:n(sn,{})}));

// 公共工具函数
/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
	if (!name) return;
	if (typeof content !== 'string') {
		content = JSON.stringify(content);
	}
	window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 */
export const getStore = name => {
	if (!name) return;
	return window.localStorage.getItem(name);
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
	if (!name) return;
	window.localStorage.removeItem(name);
}

/**
 * 遍历对象拼接成字符串 
 */
export const objectToStr = obj => {
	let str = "{";
	for(let [key,value] of Object.entries(obj)){
		console.log(value,typeof value);
		if(!(value instanceof Number))
			value = `"${value}"`
		
		if(value instanceof Object)
			value = JSON.stringify(value);
		str += `${key}:${value},`
	}
	str += "}";
	return str;
}
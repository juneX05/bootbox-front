import Vue from 'vue'

// noinspection JSUnresolvedFunction
Vue.component('v-app', {
    props: {
        dark: Boolean,
        id: String,
        light: Boolean
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-app-bar', {
    props: {
        absolute: Boolean,
        app: Boolean,
        bottom: Boolean,
        clippedLeft: Boolean,
        clippedRight: Boolean,
        collapse: Boolean,
        collapseOnScroll: Boolean,
        color: String,
        dark: Boolean,
        dense: Boolean,
        elevateOnScroll: Boolean,
        elevation: [Number, String],
        extended: Boolean,
        extensionHeight: [Number, String],
        fadeImgOnScroll: Boolean,
        fixed: Boolean,
        flat: Boolean,
        floating: Boolean,
        height: [Number, String],
        hideOnScroll: Boolean,
        invertedScroll: Boolean,
        light: Boolean,
        maxHeight: [Number, String],
        maxWidth: [Number, String],
        minHeight: [Number, String],
        minWidth: [Number, String],
        prominent: Boolean,
        scrollOffScreen: Boolean,
        scrollTarget: String,
        scrollThreshold: [String, Number],
        short: Boolean,
        shrinkOnScroll: Boolean,
        src: [String, Object],
        tag: String,
        tile: Boolean,
        value: Boolean,
        width: [Number, String]
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-app-bar-nav-icon', {})
// noinspection JSUnresolvedFunction
Vue.component('v-alert', {
    props: {
        border: String,
        closeLabel: String,
        color: String,
        coloredBorder: Boolean,
        dark: Boolean,
        dense: Boolean,
        dismissible: Boolean,
        elevation: [Number, String],
        height: [Number, String],
        icon: [Boolean, String],
        light: Boolean,
        maxHeight: [Number, String],
        maxWidth: [Number, String],
        minHeight: [Number, String],
        minWidth: [Number, String],
        mode: String,
        origin: String,
        outlined: Boolean,
        prominent: Boolean,
        tag: String,
        text: Boolean,
        tile: Boolean,
        transition: String,
        type: String,
        value: Boolean,
        width: [Number, String]
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-autocomplete', {
    props: {
        allowOverflow: Boolean,
        appendIcon: String,
        appendOuterIcon: String,
        attach: null,
        autoSelectFirst: Boolean,
        autofocus: Boolean,
        backgroundColor: String,
        cacheItems: Boolean,
        chips: Boolean,
        clearIcon: String,
        clearable: Boolean,
        color: String,
        counter: [Boolean, Number, String],
        counterValue: Function,
        dark: Boolean,
        deletableChips: Boolean,
        dense: Boolean,
        disableLookup: Boolean,
        disabled: Boolean,
        eager: Boolean,
        error: Boolean,
        errorCount: [Number, String],
        errorMessages: [String, Array],
        filled: Boolean,
        filter: Function,
        flat: Boolean,
        fullWidth: Boolean,
        height: [Number, String],
        hideDetails: [Boolean, String],
        hideNoData: Boolean,
        hideSelected: Boolean,
        hint: String,
        id: String,
        itemColor: String,
        itemDisabled: [String, Array, Function],
        itemText: [String, Array, Function],
        itemValue: [String, Array, Function],
        items: Array,
        label: String,
        light: Boolean,
        loaderHeight: [Number, String],
        loading: [Boolean, String],
        menuProps: [String, Array, Object],
        messages: [String, Array],
        multiple: Boolean,
        noDataText: String,
        noFilter: Boolean,
        openOnClear: Boolean,
        outlined: Boolean,
        persistentHint: Boolean,
        placeholder: String,
        prefix: String,
        prependIcon: String,
        prependInnerIcon: String,
        readonly: Boolean,
        returnObject: Boolean,
        reverse: Boolean,
        rounded: Boolean,
        rules: Array,
        searchInput: String,
        shaped: Boolean,
        singleLine: Boolean,
        smallChips: Boolean,
        solo: Boolean,
        soloInverted: Boolean,
        success: Boolean,
        successMessages: [String, Array],
        suffix: String,
        type: String,
        validateOnBlur: Boolean,
        value: null,
        valueComparator: Function
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-avatar', {
    props: {
        color: String,
        height: [Number, String],
        left: Boolean,
        maxHeight: [Number, String],
        maxWidth: [Number, String],
        minHeight: [Number, String],
        minWidth: [Number, String],
        right: Boolean,
        size: [Number, String],
        tile: Boolean,
        width: [Number, String]
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-badge', {
    props: {
        avatar: Boolean,
        bordered: Boolean,
        bottom: Boolean,
        color: String,
        content: null,
        dark: Boolean,
        dot: Boolean,
        icon: String,
        inline: Boolean,
        label: String,
        left: Boolean,
        light: Boolean,
        mode: String,
        offsetX: [Number, String],
        offsetY: [Number, String],
        origin: String,
        overlap: Boolean,
        tile: Boolean,
        transition: String,
        value: null
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-banner', {
    props: {
        app: Boolean,
        color: String,
        dark: Boolean,
        elevation: [Number, String],
        height: [Number, String],
        icon: String,
        iconColor: String,
        light: Boolean,
        maxHeight: [Number, String],
        maxWidth: [Number, String],
        minHeight: [Number, String],
        minWidth: [Number, String],
        mobileBreakPoint: [Number, String],
        singleLine: Boolean,
        sticky: Boolean,
        tag: String,
        tile: Boolean,
        value: Boolean,
        width: [Number, String]
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-bottom-navigation', {
    props: {
        absolute: Boolean,
        activeClass: String,
        app: Boolean,
        backgroundColor: String,
        color: String,
        dark: Boolean,
        fixed: Boolean,
        grow: Boolean,
        height: [Number, String],
        hideOnScroll: Boolean,
        horizontal: Boolean,
        inputValue: Boolean,
        light: Boolean,
        mandatory: Boolean,
        maxHeight: [Number, String],
        maxWidth: [Number, String],
        minHeight: [Number, String],
        minWidth: [Number, String],
        scrollTarget: String,
        scrollThreshold: [String, Number],
        shift: Boolean,
        value: null,
        width: [Number, String]
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-bottom-sheet', {
    props: {
        activator: null,
        attach: null,
        closeDelay: [Number, String],
        contentClass: String,
        dark: Boolean,
        disabled: Boolean,
        eager: Boolean,
        fullscreen: Boolean,
        hideOverlay: Boolean,
        inset: Boolean,
        internalActivator: Boolean,
        light: Boolean,
        maxWidth: [String, Number],
        noClickAnimation: Boolean,
        openDelay: [Number, String],
        openOnHover: Boolean,
        origin: String,
        overlayColor: String,
        overlayOpacity: [Number, String],
        persistent: Boolean,
        retainFocus: Boolean,
        returnValue: null,
        scrollable: Boolean,
        transition: String,
        value: null,
        width: [String, Number]
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-breadcrumbs', {
    props: {
        dark: Boolean,
        divider: String,
        items: Array,
        large: Boolean,
        light: Boolean
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-breadcrumbs-item', {
    props: {
        activeClass: String,
        append: Boolean,
        disabled: Boolean,
        exact: Boolean,
        exactActiveClass: String,
        href: [String, Object],
        link: Boolean,
        nuxt: Boolean,
        replace: Boolean,
        ripple: [Boolean, Object],
        tag: String,
        target: String,
        to: [String, Object]
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-breadcrumbs-divider', {})
// noinspection JSUnresolvedFunction
Vue.component('v-btn', {
    props: {
        absolute: Boolean,
        activeClass: String,
        append: Boolean,
        block: Boolean,
        bottom: Boolean,
        color: String,
        dark: Boolean,
        depressed: Boolean,
        disabled: Boolean,
        elevation: [Number, String],
        exact: Boolean,
        exactActiveClass: String,
        fab: Boolean,
        fixed: Boolean,
        height: [Number, String],
        href: [String, Object],
        icon: Boolean,
        inputValue: null,
        large: Boolean,
        left: Boolean,
        light: Boolean,
        link: Boolean,
        loading: Boolean,
        maxHeight: [Number, String],
        maxWidth: [Number, String],
        minHeight: [Number, String],
        minWidth: [Number, String],
        nuxt: Boolean,
        outlined: Boolean,
        replace: Boolean,
        retainFocusOnClick: Boolean,
        right: Boolean,
        ripple: [Boolean, Object],
        rounded: Boolean,
        small: Boolean,
        tag: String,
        target: String,
        text: Boolean,
        tile: Boolean,
        to: [String, Object],
        top: Boolean,
        type: String,
        value: null,
        width: [Number, String],
        xLarge: Boolean,
        xSmall: Boolean
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-btn-toggle', {
    props: {
        activeClass: String,
        backgroundColor: String,
        borderless: Boolean,
        color: String,
        dark: Boolean,
        dense: Boolean,
        group: Boolean,
        light: Boolean,
        mandatory: Boolean,
        max: [Number, String],
        multiple: Boolean,
        rounded: Boolean,
        shaped: Boolean,
        tile: Boolean,
        value: null
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-calendar', {
    props: {
        color: String,
        dark: Boolean,
        dayFormat: Function,
        end: String,
        eventColor: [String, Function],
        eventEnd: String,
        eventHeight: Number,
        eventMarginBottom: Number,
        eventMore: Boolean,
        eventMoreText: String,
        eventName: [String, Function],
        eventOverlapMode: [String, Function],
        eventOverlapThreshold: [String, Number],
        eventRipple: [Boolean, Object],
        eventStart: String,
        eventTextColor: [String, Function],
        events: Array,
        firstInterval: [Number, String],
        hideHeader: Boolean,
        intervalCount: [Number, String],
        intervalFormat: Function,
        intervalHeight: [Number, String],
        intervalMinutes: [Number, String],
        intervalStyle: Function,
        intervalWidth: [Number, String],
        light: Boolean,
        locale: String,
        maxDays: Number,
        minWeeks: null,
        monthFormat: Function,
        now: String,
        shortIntervals: Boolean,
        shortMonths: Boolean,
        shortWeekdays: Boolean,
        showIntervalLabel: Function,
        showMonthOnFirst: Boolean,
        start: String,
        type: String,
        value: String,
        weekdayFormat: Function,
        weekdays: [Array, String]
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-calendar-daily', {
    props: {
        color: String,
        dark: Boolean,
        dayFormat: Function,
        end: String,
        firstInterval: [Number, String],
        hideHeader: Boolean,
        intervalCount: [Number, String],
        intervalFormat: Function,
        intervalHeight: [Number, String],
        intervalMinutes: [Number, String],
        intervalStyle: Function,
        intervalWidth: [Number, String],
        light: Boolean,
        locale: String,
        maxDays: Number,
        now: String,
        shortIntervals: Boolean,
        shortWeekdays: Boolean,
        showIntervalLabel: Function,
        start: String,
        weekdayFormat: Function,
        weekdays: [Array, String]
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-calendar-weekly', {
    props: {
        color: String,
        dark: Boolean,
        dayFormat: Function,
        end: String,
        hideHeader: Boolean,
        light: Boolean,
        locale: String,
        minWeeks: null,
        monthFormat: Function,
        now: String,
        shortMonths: Boolean,
        shortWeekdays: Boolean,
        showMonthOnFirst: Boolean,
        start: String,
        weekdayFormat: Function,
        weekdays: [Array, String]
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-calendar-monthly', {
    props: {
        color: String,
        dark: Boolean,
        dayFormat: Function,
        end: String,
        hideHeader: Boolean,
        light: Boolean,
        locale: String,
        minWeeks: null,
        monthFormat: Function,
        now: String,
        shortMonths: Boolean,
        shortWeekdays: Boolean,
        showMonthOnFirst: Boolean,
        start: String,
        weekdayFormat: Function,
        weekdays: [Array, String]
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-card', {
    props: {
        activeClass: String,
        append: Boolean,
        color: String,
        dark: Boolean,
        disabled: Boolean,
        elevation: [Number, String],
        exact: Boolean,
        exactActiveClass: String,
        flat: Boolean,
        height: [Number, String],
        hover: Boolean,
        href: [String, Object],
        img: String,
        light: Boolean,
        link: Boolean,
        loaderHeight: [Number, String],
        loading: [Boolean, String],
        maxHeight: [Number, String],
        maxWidth: [Number, String],
        minHeight: [Number, String],
        minWidth: [Number, String],
        nuxt: Boolean,
        outlined: Boolean,
        raised: Boolean,
        replace: Boolean,
        ripple: [Boolean, Object],
        shaped: Boolean,
        tag: String,
        target: String,
        tile: Boolean,
        to: [String, Object],
        width: [Number, String]
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-card-actions', {})
// noinspection JSUnresolvedFunction
Vue.component('v-card-subtitle', {})
// noinspection JSUnresolvedFunction
Vue.component('v-card-text', {})
// noinspection JSUnresolvedFunction
Vue.component('v-card-title', {})
// noinspection JSUnresolvedFunction
Vue.component('v-carousel', {
    props: {
        activeClass: String,
        continuous: Boolean,
        cycle: Boolean,
        dark: Boolean,
        delimiterIcon: String,
        height: [Number, String],
        hideDelimiterBackground: Boolean,
        hideDelimiters: Boolean,
        interval: [Number, String],
        light: Boolean,
        mandatory: Boolean,
        max: [Number, String],
        multiple: Boolean,
        nextIcon: [Boolean, String],
        prevIcon: [Boolean, String],
        progress: Boolean,
        progressColor: String,
        reverse: Boolean,
        showArrows: Boolean,
        showArrowsOnHover: Boolean,
        touch: Object,
        touchless: Boolean,
        value: null,
        vertical: Boolean,
        verticalDelimiters: String
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-carousel-item', {
    props: {
        activeClass: String,
        append: Boolean,
        disabled: Boolean,
        eager: Boolean,
        exact: Boolean,
        exactActiveClass: String,
        href: [String, Object],
        link: Boolean,
        nuxt: Boolean,
        replace: Boolean,
        reverseTransition: [Boolean, String],
        ripple: [Boolean, Object],
        tag: String,
        target: String,
        to: [String, Object],
        transition: [Boolean, String],
        value: null
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-checkbox', {
    props: {
        appendIcon: String,
        backgroundColor: String,
        color: String,
        dark: Boolean,
        dense: Boolean,
        disabled: Boolean,
        error: Boolean,
        errorCount: [Number, String],
        errorMessages: [String, Array],
        falseValue: null,
        height: [Number, String],
        hideDetails: [Boolean, String],
        hint: String,
        id: String,
        indeterminate: Boolean,
        indeterminateIcon: String,
        inputValue: null,
        label: String,
        light: Boolean,
        loading: Boolean,
        messages: [String, Array],
        multiple: Boolean,
        offIcon: String,
        onIcon: String,
        persistentHint: Boolean,
        prependIcon: String,
        readonly: Boolean,
        ripple: [Boolean, Object],
        rules: Array,
        success: Boolean,
        successMessages: [String, Array],
        trueValue: null,
        validateOnBlur: Boolean,
        value: null,
        valueComparator: Function
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-simple-checkbox', {
    props: {
        color: String,
        dark: Boolean,
        disabled: Boolean,
        indeterminate: Boolean,
        indeterminateIcon: String,
        light: Boolean,
        offIcon: String,
        onIcon: String,
        ripple: Boolean,
        value: Boolean
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-chip', {
    props: {
        active: Boolean,
        activeClass: String,
        append: Boolean,
        close: Boolean,
        closeIcon: String,
        color: String,
        dark: Boolean,
        disabled: Boolean,
        draggable: Boolean,
        exact: Boolean,
        exactActiveClass: String,
        filter: Boolean,
        filterIcon: String,
        href: [String, Object],
        inputValue: null,
        label: Boolean,
        large: Boolean,
        light: Boolean,
        link: Boolean,
        nuxt: Boolean,
        outlined: Boolean,
        pill: Boolean,
        replace: Boolean,
        ripple: [Boolean, Object],
        small: Boolean,
        tag: String,
        target: String,
        textColor: String,
        to: [String, Object],
        value: null,
        xLarge: Boolean,
        xSmall: Boolean
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-chip-group', {
    props: {
        activeClass: String,
        centerActive: Boolean,
        color: String,
        column: Boolean,
        dark: Boolean,
        light: Boolean,
        mandatory: Boolean,
        max: [Number, String],
        mobileBreakPoint: [Number, String],
        multiple: Boolean,
        nextIcon: String,
        prevIcon: String,
        showArrows: Boolean,
        value: null
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-color-picker', {
    props: {
        canvasHeight: [String, Number],
        dark: Boolean,
        disabled: Boolean,
        dotSize: [Number, String],
        flat: Boolean,
        hideCanvas: Boolean,
        hideInputs: Boolean,
        hideModeSwitch: Boolean,
        light: Boolean,
        mode: String,
        showSwatches: Boolean,
        swatches: Array,
        swatchesMaxHeight: [Number, String],
        value: [Object, String],
        width: [Number, String]
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-color-picker-swatches', {
    props: {
        color: Object,
        dark: Boolean,
        light: Boolean,
        maxHeight: [Number, String],
        maxWidth: [Number, String],
        swatches: Array
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-color-picker-canvas', {
    props: {
        color: Object,
        disabled: Boolean,
        dotSize: [Number, String],
        height: [Number, String],
        width: [Number, String]
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-content', {
    props: {
        tag: String
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-combobox', {
    props: {
        allowOverflow: Boolean,
        appendIcon: String,
        appendOuterIcon: String,
        attach: null,
        autoSelectFirst: Boolean,
        autofocus: Boolean,
        backgroundColor: String,
        cacheItems: Boolean,
        chips: Boolean,
        clearIcon: String,
        clearable: Boolean,
        color: String,
        counter: [Boolean, Number, String],
        counterValue: Function,
        dark: Boolean,
        deletableChips: Boolean,
        delimiters: Array,
        dense: Boolean,
        disableLookup: Boolean,
        disabled: Boolean,
        eager: Boolean,
        error: Boolean,
        errorCount: [Number, String],
        errorMessages: [String, Array],
        filled: Boolean,
        filter: Function,
        flat: Boolean,
        fullWidth: Boolean,
        height: [Number, String],
        hideDetails: [Boolean, String],
        hideNoData: Boolean,
        hideSelected: Boolean,
        hint: String,
        id: String,
        itemColor: String,
        itemDisabled: [String, Array, Function],
        itemText: [String, Array, Function],
        itemValue: [String, Array, Function],
        items: Array,
        label: String,
        light: Boolean,
        loaderHeight: [Number, String],
        loading: [Boolean, String],
        menuProps: [String, Array, Object],
        messages: [String, Array],
        multiple: Boolean,
        noDataText: String,
        noFilter: Boolean,
        openOnClear: Boolean,
        outlined: Boolean,
        persistentHint: Boolean,
        placeholder: String,
        prefix: String,
        prependIcon: String,
        prependInnerIcon: String,
        readonly: Boolean,
        returnObject: Boolean,
        reverse: Boolean,
        rounded: Boolean,
        rules: Array,
        searchInput: String,
        shaped: Boolean,
        singleLine: Boolean,
        smallChips: Boolean,
        solo: Boolean,
        soloInverted: Boolean,
        success: Boolean,
        successMessages: [String, Array],
        suffix: String,
        type: String,
        validateOnBlur: Boolean,
        value: null,
        valueComparator: Function
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-counter', {
    props: {
        dark: Boolean,
        light: Boolean,
        max: [Number, String],
        value: [Number, String]
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-data', {
    props: {
        customFilter: Function,
        customGroup: Function,
        customSort: Function,
        disableFiltering: Boolean,
        disablePagination: Boolean,
        disableSort: Boolean,
        groupBy: [String, Array],
        groupDesc: [Boolean, Array],
        itemKey: null,
        items: Array,
        itemsPerPage: Number,
        locale: String,
        multiSort: Boolean,
        mustSort: Boolean,
        options: DataOptions,
        page: Number,
        search: String,
        serverItemsLength: Number,
        sortBy: [String, Array],
        sortDesc: [Boolean, Array]
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-data-iterator', {
    props: {
        customFilter: Function,
        customGroup: Function,
        customSort: Function,
        dark: Boolean,
        disableFiltering: Boolean,
        disablePagination: Boolean,
        disableSort: Boolean,
        expanded: Array,
        footerProps: Object,
        groupBy: [String, Array],
        groupDesc: [Boolean, Array],
        hideDefaultFooter: Boolean,
        itemKey: String,
        items: Array,
        itemsPerPage: Number,
        light: Boolean,
        loading: [Boolean, String],
        loadingText: String,
        locale: String,
        mobileBreakpoint: [Number, String],
        multiSort: Boolean,
        mustSort: Boolean,
        noDataText: String,
        noResultsText: String,
        options: DataOptions,
        page: Number,
        search: String,
        selectableKey: String,
        serverItemsLength: Number,
        singleExpand: Boolean,
        singleSelect: Boolean,
        sortBy: [String, Array],
        sortDesc: [Boolean, Array],
        value: Array
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-data-footer', {
    props: {
        disableItemsPerPage: Boolean,
        disablePagination: Boolean,
        firstIcon: String,
        itemsPerPageAllText: String,
        itemsPerPageOptions: Array,
        itemsPerPageText: String,
        lastIcon: String,
        nextIcon: String,
        options: Object,
        pageText: String,
        pagination: Object,
        prevIcon: String,
        showCurrentPage: Boolean,
        showFirstLastPage: Boolean
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-data-table', {
    props: {
        calculateWidths: Boolean,
        caption: String,
        customFilter: Function,
        customGroup: Function,
        customSort: Function,
        dark: Boolean,
        dense: Boolean,
        disableFiltering: Boolean,
        disablePagination: Boolean,
        disableSort: Boolean,
        expandIcon: String,
        expanded: Array,
        fixedHeader: Boolean,
        footerProps: Object,
        groupBy: [String, Array],
        groupDesc: [Boolean, Array],
        headerProps: Object,
        headers: TableHeader[],
        headersLength: Number,
        height: [Number, String],
        hideDefaultFooter: Boolean,
        hideDefaultHeader: Boolean,
        itemKey: String,
        items: Array,
        itemsPerPage: Number,
        light: Boolean,
        loading: [Boolean, String],
        loadingText: String,
        locale: String,
        mobileBreakpoint: [Number, String],
        multiSort: Boolean,
        mustSort: Boolean,
        noDataText: String,
        noResultsText: String,
        options: DataOptions,
        page: Number,
        search: String,
        selectableKey: String,
        serverItemsLength: Number,
        showExpand: Boolean,
        showGroupBy: Boolean,
        showSelect: Boolean,
        singleExpand: Boolean,
        singleSelect: Boolean,
        sortBy: [String, Array],
        sortDesc: [Boolean, Array],
        value: Array
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-edit-dialog', {
    props: {
        cancelText: null,
        dark: Boolean,
        eager: Boolean,
        large: Boolean,
        light: Boolean,
        persistent: Boolean,
        returnValue: null,
        saveText: null,
        transition: String
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-table-overflow', {})
// noinspection JSUnresolvedFunction
Vue.component('v-data-table-header', {
    props: {
        mobile: Boolean
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-simple-table', {
    props: {
        dark: Boolean,
        dense: Boolean,
        fixedHeader: Boolean,
        height: [Number, String],
        light: Boolean
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-virtual-table', {
    props: {
        chunkSize: Number,
        dark: Boolean,
        dense: Boolean,
        fixedHeader: Boolean,
        headerHeight: Number,
        height: [Number, String],
        items: Array,
        light: Boolean,
        rowHeight: Number
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-date-picker', {
    props: {
        allowedDates: Function,
        color: String,
        dark: Boolean,
        dayFormat: Function,
        disabled: Boolean,
        eventColor: [Array, Function, Object, String],
        events: [Array, Function, Object],
        firstDayOfWeek: [String, Number],
        fullWidth: Boolean,
        headerColor: String,
        headerDateFormat: Function,
        landscape: Boolean,
        light: Boolean,
        locale: String,
        localeFirstDayOfYear: [String, Number],
        max: String,
        min: String,
        monthFormat: Function,
        multiple: Boolean,
        nextIcon: String,
        noTitle: Boolean,
        pickerDate: String,
        prevIcon: String,
        range: Boolean,
        reactive: Boolean,
        readonly: Boolean,
        scrollable: Boolean,
        selectedItemsText: String,
        showCurrent: [Boolean, String],
        showWeek: Boolean,
        titleDateFormat: Function,
        type: String,
        value: [Array, String],
        weekdayFormat: Function,
        width: [Number, String],
        yearFormat: Function,
        yearIcon: String
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-date-picker-title', {
    props: {
        color: String,
        date: String,
        disabled: Boolean,
        readonly: Boolean,
        selectingYear: Boolean,
        value: String,
        year: [Number, String],
        yearIcon: String
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-date-picker-header', {
    props: {
        color: String,
        dark: Boolean,
        disabled: Boolean,
        format: Function,
        light: Boolean,
        locale: String,
        max: String,
        min: String,
        nextIcon: String,
        prevIcon: String,
        readonly: Boolean,
        value: [Number, String]
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-date-picker-date-table', {
    props: {
        allowedDates: Function,
        color: String,
        current: String,
        dark: Boolean,
        disabled: Boolean,
        eventColor: [Array, Function, Object, String],
        events: [Array, Function, Object],
        firstDayOfWeek: [String, Number],
        format: Function,
        light: Boolean,
        locale: String,
        localeFirstDayOfYear: [String, Number],
        max: String,
        min: String,
        range: Boolean,
        readonly: Boolean,
        scrollable: Boolean,
        showWeek: Boolean,
        tableDate: String,
        value: [String, Array],
        weekdayFormat: Function
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-date-picker-month-table', {
    props: {
        allowedDates: Function,
        color: String,
        current: String,
        dark: Boolean,
        disabled: Boolean,
        eventColor: [Array, Function, Object, String],
        events: [Array, Function, Object],
        format: Function,
        light: Boolean,
        locale: String,
        max: String,
        min: String,
        range: Boolean,
        readonly: Boolean,
        scrollable: Boolean,
        tableDate: String,
        value: [String, Array]
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-date-picker-years', {
    props: {
        color: String,
        format: Function,
        locale: String,
        max: [Number, String],
        min: [Number, String],
        readonly: Boolean,
        value: [Number, String]
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-dialog', {
    props: {
        activator: null,
        attach: null,
        closeDelay: [Number, String],
        contentClass: String,
        dark: Boolean,
        disabled: Boolean,
        eager: Boolean,
        fullscreen: Boolean,
        hideOverlay: Boolean,
        internalActivator: Boolean,
        light: Boolean,
        maxWidth: [String, Number],
        noClickAnimation: Boolean,
        openDelay: [Number, String],
        openOnHover: Boolean,
        origin: String,
        overlayColor: String,
        overlayOpacity: [Number, String],
        persistent: Boolean,
        retainFocus: Boolean,
        returnValue: null,
        scrollable: Boolean,
        transition: [String, Boolean],
        value: null,
        width: [String, Number]
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-divider', {
    props: {
        dark: Boolean,
        inset: Boolean,
        light: Boolean,
        vertical: Boolean
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-expansion-panels', {
    props: {
        accordion: Boolean,
        activeClass: String,
        dark: Boolean,
        disabled: Boolean,
        flat: Boolean,
        focusable: Boolean,
        hover: Boolean,
        inset: Boolean,
        light: Boolean,
        mandatory: Boolean,
        max: [Number, String],
        multiple: Boolean,
        popout: Boolean,
        readonly: Boolean,
        tile: Boolean,
        value: null
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-expansion-panel', {
    props: {
        activeClass: String,
        disabled: Boolean,
        readonly: Boolean
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-expansion-panel-header', {
    props: {
        color: String,
        disableIconRotate: Boolean,
        expandIcon: String,
        hideActions: Boolean,
        ripple: [Boolean, Object]
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-expansion-panel-content', {
    props: {
        color: String,
        eager: Boolean
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-file-input', {
    props: {
        appendIcon: String,
        appendOuterIcon: String,
        autofocus: Boolean,
        backgroundColor: String,
        chips: Boolean,
        clearIcon: String,
        clearable: Boolean,
        color: String,
        counter: [Boolean, Number, String],
        counterSizeString: String,
        counterString: String,
        counterValue: Function,
        dark: Boolean,
        dense: Boolean,
        disabled: Boolean,
        error: Boolean,
        errorCount: [Number, String],
        errorMessages: [String, Array],
        filled: Boolean,
        flat: Boolean,
        fullWidth: Boolean,
        height: [Number, String],
        hideDetails: [Boolean, String],
        hint: String,
        id: String,
        label: String,
        light: Boolean,
        loaderHeight: [Number, String],
        loading: [Boolean, String],
        messages: [String, Array],
        multiple: Boolean,
        outlined: Boolean,
        persistentHint: Boolean,
        placeholder: String,
        prefix: String,
        prependIcon: String,
        prependInnerIcon: String,
        readonly: Boolean,
        reverse: Boolean,
        rounded: Boolean,
        rules: Array,
        shaped: Boolean,
        showSize: [Boolean, Number],
        singleLine: Boolean,
        smallChips: Boolean,
        solo: Boolean,
        soloInverted: Boolean,
        success: Boolean,
        successMessages: [String, Array],
        suffix: String,
        truncateLength: [Number, String],
        type: String,
        validateOnBlur: Boolean,
        value: null
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-footer', {
    props: {
        absolute: Boolean,
        app: Boolean,
        color: String,
        dark: Boolean,
        elevation: [Number, String],
        fixed: Boolean,
        height: [Number, String],
        inset: Boolean,
        light: Boolean,
        maxHeight: [Number, String],
        maxWidth: [Number, String],
        minHeight: [Number, String],
        minWidth: [Number, String],
        padless: Boolean,
        tag: String,
        tile: Boolean,
        width: [Number, String]
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-form', {
    props: {
        lazyValidation: Boolean,
        value: Boolean
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-container', {
    props: {
        fluid: Boolean,
        id: String,
        tag: String
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-col', {
    props: {
        alignSelf: String,
        cols: [Boolean, String, Number],
        lg: [Boolean, String, Number],
        md: [Boolean, String, Number],
        offset: [String, Number],
        offsetLg: [String, Number],
        offsetMd: [String, Number],
        offsetSm: [String, Number],
        offsetXl: [String, Number],
        order: [String, Number],
        orderLg: [String, Number],
        orderMd: [String, Number],
        orderSm: [String, Number],
        orderXl: [String, Number],
        sm: [Boolean, String, Number],
        tag: String,
        xl: [Boolean, String, Number]
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-row', {
    props: {
        align: String,
        alignContent: String,
        alignContentLg: String,
        alignContentMd: String,
        alignContentSm: String,
        alignContentXl: String,
        alignLg: String,
        alignMd: String,
        alignSm: String,
        alignXl: String,
        dense: Boolean,
        justify: String,
        justifyLg: String,
        justifyMd: String,
        justifySm: String,
        justifyXl: String,
        noGutters: Boolean,
        tag: String
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-spacer', {})
// noinspection JSUnresolvedFunction
Vue.component('v-layout', {
    props: {
        alignBaseline: Boolean,
        alignCenter: Boolean,
        alignContentCenter: Boolean,
        alignContentEnd: Boolean,
        alignContentSpaceAround: Boolean,
        alignContentSpaceBetween: Boolean,
        alignContentStart: Boolean,
        alignEnd: Boolean,
        alignStart: Boolean,
        column: Boolean,
        'd-{type}': Boolean,
        fillHeight: Boolean,
        id: String,
        justifyCenter: Boolean,
        justifyEnd: Boolean,
        justifySpaceAround: Boolean,
        justifySpaceBetween: Boolean,
        justifyStart: Boolean,
        reverse: Boolean,
        row: Boolean,
        tag: String,
        wrap: Boolean
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-flex', {
    props: {
        '(size)(1-12)': Boolean,
        alignSelfBaseline: Boolean,
        alignSelfCenter: Boolean,
        alignSelfEnd: Boolean,
        alignSelfStart: Boolean,
        grow: Boolean,
        id: String,
        'offset-(size)(0-12)': Boolean,
        'order-(size)(1-12)': Boolean,
        shrink: Boolean,
        tag: String
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-hover', {
    props: {
        closeDelay: [Number, String],
        disabled: Boolean,
        openDelay: [Number, String],
        value: Boolean
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-icon', {
    props: {
        color: String,
        dark: Boolean,
        dense: Boolean,
        disabled: Boolean,
        large: Boolean,
        left: Boolean,
        light: Boolean,
        right: Boolean,
        size: [Number, String],
        small: Boolean,
        tag: String,
        xLarge: Boolean,
        xSmall: Boolean
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-img', {
    props: {
        alt: String,
        aspectRatio: [String, Number],
        contain: Boolean,
        eager: Boolean,
        gradient: String,
        height: [Number, String],
        lazySrc: String,
        maxHeight: [Number, String],
        maxWidth: [Number, String],
        minHeight: [Number, String],
        minWidth: [Number, String],
        options: Object,
        position: String,
        sizes: String,
        src: [String, Object],
        srcset: String,
        transition: [Boolean, String],
        width: [Number, String]
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-input', {
    props: {
        appendIcon: String,
        backgroundColor: String,
        color: String,
        dark: Boolean,
        dense: Boolean,
        disabled: Boolean,
        error: Boolean,
        errorCount: [Number, String],
        errorMessages: [String, Array],
        height: [Number, String],
        hideDetails: [Boolean, String],
        hint: String,
        id: String,
        label: String,
        light: Boolean,
        loading: Boolean,
        messages: [String, Array],
        persistentHint: Boolean,
        prependIcon: String,
        readonly: Boolean,
        rules: Array,
        success: Boolean,
        successMessages: [String, Array],
        validateOnBlur: Boolean,
        value: null
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-item', {
    props: {
        activeClass: String,
        disabled: Boolean,
        value: null
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-item-group', {
    props: {
        activeClass: String,
        dark: Boolean,
        light: Boolean,
        mandatory: Boolean,
        max: [Number, String],
        multiple: Boolean,
        value: null
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-label', {
    props: {
        absolute: Boolean,
        color: String,
        dark: Boolean,
        disabled: Boolean,
        focused: Boolean,
        for: String,
        left: [Number, String],
        light: Boolean,
        right: [Number, String],
        value: Boolean
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-lazy', {
    props: {
        minHeight: [Number, String],
        options: Object,
        tag: String,
        transition: String,
        value: null
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-list-item-action-text', {})
// noinspection JSUnresolvedFunction
Vue.component('v-list-item-content', {})
// noinspection JSUnresolvedFunction
Vue.component('v-list-item-title', {})
// noinspection JSUnresolvedFunction
Vue.component('v-list-item-subtitle', {})
// noinspection JSUnresolvedFunction
Vue.component('v-list', {
    props: {
        color: String,
        dark: Boolean,
        dense: Boolean,
        disabled: Boolean,
        elevation: [Number, String],
        expand: Boolean,
        flat: Boolean,
        height: [Number, String],
        light: Boolean,
        maxHeight: [Number, String],
        maxWidth: [Number, String],
        minHeight: [Number, String],
        minWidth: [Number, String],
        nav: Boolean,
        rounded: Boolean,
        shaped: Boolean,
        subheader: Boolean,
        tag: String,
        threeLine: Boolean,
        tile: Boolean,
        twoLine: Boolean,
        width: [Number, String]
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-list-group', {
    props: {
        activeClass: String,
        appendIcon: String,
        color: String,
        disabled: Boolean,
        eager: Boolean,
        group: String,
        noAction: Boolean,
        prependIcon: String,
        ripple: [Boolean, Object],
        subGroup: Boolean,
        value: null
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-list-item', {
    props: {
        activeClass: String,
        append: Boolean,
        color: String,
        dark: Boolean,
        dense: Boolean,
        disabled: Boolean,
        exact: Boolean,
        exactActiveClass: String,
        href: [String, Object],
        inactive: Boolean,
        inputValue: null,
        light: Boolean,
        link: Boolean,
        nuxt: Boolean,
        replace: Boolean,
        ripple: [Boolean, Object],
        selectable: Boolean,
        tag: String,
        target: String,
        threeLine: Boolean,
        to: [String, Object],
        twoLine: Boolean,
        value: null
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-list-item-action', {})
// noinspection JSUnresolvedFunction
Vue.component('v-list-item-avatar', {
    props: {
        color: String,
        height: [Number, String],
        horizontal: Boolean,
        left: Boolean,
        maxHeight: [Number, String],
        maxWidth: [Number, String],
        minHeight: [Number, String],
        minWidth: [Number, String],
        right: Boolean,
        size: [Number, String],
        tile: Boolean,
        width: [Number, String]
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-list-item-icon', {})
// noinspection JSUnresolvedFunction
Vue.component('v-list-item-group', {
    props: {
        activeClass: String,
        color: String,
        dark: Boolean,
        light: Boolean,
        mandatory: Boolean,
        max: [Number, String],
        multiple: Boolean,
        value: null
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-menu', {
    props: {
        absolute: Boolean,
        activator: null,
        allowOverflow: Boolean,
        attach: null,
        auto: Boolean,
        bottom: Boolean,
        closeDelay: [Number, String],
        closeOnClick: Boolean,
        closeOnContentClick: Boolean,
        contentClass: String,
        dark: Boolean,
        disableKeys: Boolean,
        disabled: Boolean,
        eager: Boolean,
        fixed: Boolean,
        internalActivator: Boolean,
        left: Boolean,
        light: Boolean,
        maxHeight: [Number, String],
        maxWidth: [Number, String],
        minWidth: [Number, String],
        nudgeBottom: [Number, String],
        nudgeLeft: [Number, String],
        nudgeRight: [Number, String],
        nudgeTop: [Number, String],
        nudgeWidth: [Number, String],
        offsetOverflow: Boolean,
        offsetX: Boolean,
        offsetY: Boolean,
        openDelay: [Number, String],
        openOnClick: Boolean,
        openOnHover: Boolean,
        origin: String,
        positionX: Number,
        positionY: Number,
        returnValue: null,
        right: Boolean,
        top: Boolean,
        transition: [Boolean, String],
        value: null,
        zIndex: [Number, String]
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-messages', {
    props: {
        color: String,
        dark: Boolean,
        light: Boolean,
        value: Array
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-navigation-drawer', {
    props: {
        absolute: Boolean,
        app: Boolean,
        bottom: Boolean,
        clipped: Boolean,
        color: String,
        dark: Boolean,
        disableResizeWatcher: Boolean,
        disableRouteWatcher: Boolean,
        expandOnHover: Boolean,
        fixed: Boolean,
        floating: Boolean,
        height: [Number, String],
        hideOverlay: Boolean,
        light: Boolean,
        miniVariant: Boolean,
        miniVariantWidth: [Number, String],
        mobileBreakPoint: [Number, String],
        overlayColor: String,
        overlayOpacity: [Number, String],
        permanent: Boolean,
        right: Boolean,
        src: [String, Object],
        stateless: Boolean,
        tag: String,
        temporary: Boolean,
        touchless: Boolean,
        value: null,
        width: [Number, String]
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-overflow-btn', {
    props: {
        allowOverflow: Boolean,
        appendIcon: String,
        appendOuterIcon: String,
        attach: null,
        autoSelectFirst: Boolean,
        autofocus: Boolean,
        backgroundColor: String,
        cacheItems: Boolean,
        chips: Boolean,
        clearIcon: String,
        clearable: Boolean,
        color: String,
        counter: [Boolean, Number, String],
        counterValue: Function,
        dark: Boolean,
        deletableChips: Boolean,
        dense: Boolean,
        disableLookup: Boolean,
        disabled: Boolean,
        eager: Boolean,
        editable: Boolean,
        error: Boolean,
        errorCount: [Number, String],
        errorMessages: [String, Array],
        filled: Boolean,
        filter: Function,
        flat: Boolean,
        fullWidth: Boolean,
        height: [Number, String],
        hideDetails: [Boolean, String],
        hideNoData: Boolean,
        hideSelected: Boolean,
        hint: String,
        id: String,
        itemColor: String,
        itemDisabled: [String, Array, Function],
        itemText: [String, Array, Function],
        itemValue: [String, Array, Function],
        items: Array,
        label: String,
        light: Boolean,
        loaderHeight: [Number, String],
        loading: [Boolean, String],
        menuProps: [String, Array, Object],
        messages: [String, Array],
        multiple: Boolean,
        noDataText: String,
        noFilter: Boolean,
        openOnClear: Boolean,
        outlined: Boolean,
        persistentHint: Boolean,
        placeholder: String,
        prefix: String,
        prependIcon: String,
        prependInnerIcon: String,
        readonly: Boolean,
        returnObject: Boolean,
        reverse: Boolean,
        rounded: Boolean,
        rules: Array,
        searchInput: String,
        segmented: Boolean,
        shaped: Boolean,
        singleLine: Boolean,
        smallChips: Boolean,
        solo: Boolean,
        soloInverted: Boolean,
        success: Boolean,
        successMessages: [String, Array],
        suffix: String,
        type: String,
        validateOnBlur: Boolean,
        value: null,
        valueComparator: Function
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-overlay', {
    props: {
        absolute: Boolean,
        color: String,
        dark: Boolean,
        light: Boolean,
        opacity: [Number, String],
        value: null,
        zIndex: [Number, String]
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-pagination', {
    props: {
        circle: Boolean,
        color: String,
        dark: Boolean,
        disabled: Boolean,
        length: Number,
        light: Boolean,
        nextIcon: String,
        prevIcon: String,
        totalVisible: [Number, String],
        value: Number
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-sheet', {
    props: {
        color: String,
        dark: Boolean,
        elevation: [Number, String],
        height: [Number, String],
        light: Boolean,
        maxHeight: [Number, String],
        maxWidth: [Number, String],
        minHeight: [Number, String],
        minWidth: [Number, String],
        tag: String,
        tile: Boolean,
        width: [Number, String]
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-parallax', {
    props: {
        alt: String,
        height: [String, Number],
        src: String
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-picker', {
    props: {
        color: String,
        dark: Boolean,
        fullWidth: Boolean,
        landscape: Boolean,
        light: Boolean,
        noTitle: Boolean,
        transition: String,
        width: [Number, String]
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-progress-circular', {
    props: {
        button: Boolean,
        color: String,
        indeterminate: Boolean,
        rotate: [Number, String],
        size: [Number, String],
        value: [Number, String],
        width: [Number, String]
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-progress-linear', {
    props: {
        absolute: Boolean,
        active: Boolean,
        backgroundColor: String,
        backgroundOpacity: [Number, String],
        bottom: Boolean,
        bufferValue: [Number, String],
        color: String,
        dark: Boolean,
        fixed: Boolean,
        height: [Number, String],
        indeterminate: Boolean,
        light: Boolean,
        query: Boolean,
        rounded: Boolean,
        stream: Boolean,
        striped: Boolean,
        top: Boolean,
        value: [Number, String]
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-radio-group', {
    props: {
        activeClass: String,
        appendIcon: String,
        backgroundColor: String,
        color: String,
        column: Boolean,
        dark: Boolean,
        dense: Boolean,
        disabled: Boolean,
        error: Boolean,
        errorCount: [Number, String],
        errorMessages: [String, Array],
        height: [Number, String],
        hideDetails: [Boolean, String],
        hint: String,
        id: String,
        label: String,
        light: Boolean,
        loading: Boolean,
        mandatory: Boolean,
        max: [Number, String],
        messages: [String, Array],
        multiple: Boolean,
        name: String,
        persistentHint: Boolean,
        prependIcon: String,
        readonly: Boolean,
        row: Boolean,
        rules: Array,
        success: Boolean,
        successMessages: [String, Array],
        validateOnBlur: Boolean,
        value: null,
        valueComparator: Function
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-radio', {
    props: {
        activeClass: String,
        color: String,
        dark: Boolean,
        disabled: Boolean,
        id: String,
        label: String,
        light: Boolean,
        name: String,
        offIcon: String,
        onIcon: String,
        readonly: Boolean,
        ripple: [Boolean, Object],
        value: null
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-range-slider', {
    props: {
        appendIcon: String,
        backgroundColor: String,
        color: String,
        dark: Boolean,
        dense: Boolean,
        disabled: Boolean,
        error: Boolean,
        errorCount: [Number, String],
        errorMessages: [String, Array],
        height: [Number, String],
        hideDetails: [Boolean, String],
        hint: String,
        id: String,
        inverseLabel: Boolean,
        label: String,
        light: Boolean,
        loaderHeight: [Number, String],
        loading: [Boolean, String],
        max: [Number, String],
        messages: [String, Array],
        min: [Number, String],
        persistentHint: Boolean,
        prependIcon: String,
        readonly: Boolean,
        rules: Array,
        step: [Number, String],
        success: Boolean,
        successMessages: [String, Array],
        thumbColor: String,
        thumbLabel: [Boolean, String],
        thumbSize: [Number, String],
        tickLabels: Array,
        tickSize: [Number, String],
        ticks: [Boolean, String],
        trackColor: String,
        trackFillColor: String,
        validateOnBlur: Boolean,
        value: null,
        vertical: Boolean
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-rating', {
    props: {
        backgroundColor: String,
        clearable: Boolean,
        closeDelay: [Number, String],
        color: String,
        dark: Boolean,
        dense: Boolean,
        emptyIcon: String,
        fullIcon: String,
        halfIcon: String,
        halfIncrements: Boolean,
        hover: Boolean,
        large: Boolean,
        length: [Number, String],
        light: Boolean,
        openDelay: [Number, String],
        readonly: Boolean,
        ripple: [Boolean, Object],
        size: [Number, String],
        small: Boolean,
        value: Number,
        xLarge: Boolean,
        xSmall: Boolean
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-responsive', {
    props: {
        aspectRatio: [String, Number],
        height: [Number, String],
        maxHeight: [Number, String],
        maxWidth: [Number, String],
        minHeight: [Number, String],
        minWidth: [Number, String],
        width: [Number, String]
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-select', {
    props: {
        appendIcon: String,
        appendOuterIcon: String,
        attach: null,
        autofocus: Boolean,
        backgroundColor: String,
        cacheItems: Boolean,
        chips: Boolean,
        clearIcon: String,
        clearable: Boolean,
        color: String,
        counter: [Boolean, Number, String],
        counterValue: Function,
        dark: Boolean,
        deletableChips: Boolean,
        dense: Boolean,
        disableLookup: Boolean,
        disabled: Boolean,
        eager: Boolean,
        error: Boolean,
        errorCount: [Number, String],
        errorMessages: [String, Array],
        filled: Boolean,
        filter: null,
        flat: Boolean,
        fullWidth: Boolean,
        height: [Number, String],
        hideDetails: [Boolean, String],
        hideSelected: Boolean,
        hint: String,
        id: String,
        itemColor: String,
        itemDisabled: [String, Array, Function],
        itemText: [String, Array, Function],
        itemValue: [String, Array, Function],
        items: Array,
        label: String,
        light: Boolean,
        loaderHeight: [Number, String],
        loading: [Boolean, String],
        menuProps: [String, Array, Object],
        messages: [String, Array],
        multiple: Boolean,
        noDataText: String,
        openOnClear: Boolean,
        outlined: Boolean,
        persistentHint: Boolean,
        placeholder: String,
        prefix: String,
        prependIcon: String,
        prependInnerIcon: String,
        readonly: Boolean,
        returnObject: Boolean,
        reverse: Boolean,
        rounded: Boolean,
        rules: Array,
        shaped: Boolean,
        singleLine: Boolean,
        smallChips: Boolean,
        solo: Boolean,
        soloInverted: Boolean,
        success: Boolean,
        successMessages: [String, Array],
        suffix: String,
        type: String,
        validateOnBlur: Boolean,
        value: null,
        valueComparator: Function
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-skeleton-loader', {
    props: {
        boilerplate: Boolean,
        dark: Boolean,
        elevation: [Number, String],
        height: [Number, String],
        light: Boolean,
        loading: Boolean,
        maxHeight: [Number, String],
        maxWidth: [Number, String],
        minHeight: [Number, String],
        minWidth: [Number, String],
        tile: Boolean,
        transition: String,
        type: String,
        types: Object,
        width: [Number, String]
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-slider', {
    props: {
        appendIcon: String,
        backgroundColor: String,
        color: String,
        dark: Boolean,
        dense: Boolean,
        disabled: Boolean,
        error: Boolean,
        errorCount: [Number, String],
        errorMessages: [String, Array],
        height: [Number, String],
        hideDetails: [Boolean, String],
        hint: String,
        id: String,
        inverseLabel: Boolean,
        label: String,
        light: Boolean,
        loaderHeight: [Number, String],
        loading: [Boolean, String],
        max: [Number, String],
        messages: [String, Array],
        min: [Number, String],
        persistentHint: Boolean,
        prependIcon: String,
        readonly: Boolean,
        rules: Array,
        step: [Number, String],
        success: Boolean,
        successMessages: [String, Array],
        thumbColor: String,
        thumbLabel: [Boolean, String],
        thumbSize: [Number, String],
        tickLabels: Array,
        tickSize: [Number, String],
        ticks: [Boolean, String],
        trackColor: String,
        trackFillColor: String,
        validateOnBlur: Boolean,
        value: null,
        vertical: Boolean
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-slide-group', {
    props: {
        activeClass: String,
        centerActive: Boolean,
        dark: Boolean,
        light: Boolean,
        mandatory: Boolean,
        max: [Number, String],
        mobileBreakPoint: [Number, String],
        multiple: Boolean,
        nextIcon: String,
        prevIcon: String,
        showArrows: Boolean,
        value: null
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-slide-item', {
    props: {
        activeClass: String,
        disabled: Boolean,
        value: null
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-snackbar', {
    props: {
        absolute: Boolean,
        bottom: Boolean,
        color: String,
        left: Boolean,
        multiLine: Boolean,
        right: Boolean,
        timeout: Number,
        top: Boolean,
        value: null,
        vertical: Boolean
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-sparkline', {
    props: {
        autoDraw: Boolean,
        autoDrawDuration: Number,
        autoDrawEasing: String,
        autoLineWidth: Boolean,
        color: String,
        fill: Boolean,
        gradient: Array,
        gradientDirection: String,
        height: [String, Number],
        labelSize: [Number, String],
        labels: Array,
        lineWidth: [String, Number],
        padding: [String, Number],
        showLabels: Boolean,
        smooth: [Boolean, Number, String],
        type: String,
        value: Array,
        width: [Number, String]
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-speed-dial', {
    props: {
        absolute: Boolean,
        bottom: Boolean,
        direction: String,
        fixed: Boolean,
        left: Boolean,
        mode: String,
        openOnHover: Boolean,
        origin: String,
        right: Boolean,
        top: Boolean,
        transition: String,
        value: null
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-stepper', {
    props: {
        altLabels: Boolean,
        dark: Boolean,
        light: Boolean,
        nonLinear: Boolean,
        value: null,
        vertical: Boolean
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-stepper-content', {
    props: {
        step: [Number, String]
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-stepper-step', {
    props: {
        color: String,
        complete: Boolean,
        completeIcon: String,
        editIcon: String,
        editable: Boolean,
        errorIcon: String,
        rules: Array,
        step: [Number, String]
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-stepper-header', {})
// noinspection JSUnresolvedFunction
Vue.component('v-stepper-items', {})
// noinspection JSUnresolvedFunction
Vue.component('v-subheader', {
    props: {
        dark: Boolean,
        inset: Boolean,
        light: Boolean
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-switch', {
    props: {
        appendIcon: String,
        backgroundColor: String,
        color: String,
        dark: Boolean,
        dense: Boolean,
        disabled: Boolean,
        error: Boolean,
        errorCount: [Number, String],
        errorMessages: [String, Array],
        falseValue: null,
        flat: Boolean,
        height: [Number, String],
        hideDetails: [Boolean, String],
        hint: String,
        id: String,
        inputValue: null,
        inset: Boolean,
        label: String,
        light: Boolean,
        loading: [Boolean, String],
        messages: [String, Array],
        multiple: Boolean,
        persistentHint: Boolean,
        prependIcon: String,
        readonly: Boolean,
        ripple: [Boolean, Object],
        rules: Array,
        success: Boolean,
        successMessages: [String, Array],
        trueValue: null,
        validateOnBlur: Boolean,
        value: null,
        valueComparator: Function
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-system-bar', {
    props: {
        absolute: Boolean,
        app: Boolean,
        color: String,
        dark: Boolean,
        fixed: Boolean,
        height: [Number, String],
        light: Boolean,
        lightsOut: Boolean,
        window: Boolean
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-tabs', {
    props: {
        activeClass: String,
        alignWithTitle: Boolean,
        backgroundColor: String,
        centerActive: Boolean,
        centered: Boolean,
        color: String,
        dark: Boolean,
        fixedTabs: Boolean,
        grow: Boolean,
        height: [Number, String],
        hideSlider: Boolean,
        iconsAndText: Boolean,
        light: Boolean,
        mobileBreakPoint: [Number, String],
        nextIcon: String,
        optional: Boolean,
        prevIcon: String,
        right: Boolean,
        showArrows: Boolean,
        sliderColor: String,
        sliderSize: [Number, String],
        value: null,
        vertical: Boolean
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-tab', {
    props: {
        activeClass: String,
        append: Boolean,
        dark: Boolean,
        disabled: Boolean,
        exact: Boolean,
        exactActiveClass: String,
        href: [String, Object],
        light: Boolean,
        link: Boolean,
        nuxt: Boolean,
        replace: Boolean,
        ripple: [Boolean, Object],
        tag: String,
        target: String,
        to: [String, Object]
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-tab-item', {
    props: {
        activeClass: String,
        disabled: Boolean,
        eager: Boolean,
        id: String,
        reverseTransition: [Boolean, String],
        transition: [Boolean, String],
        value: null
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-tabs-items', {
    props: {
        activeClass: String,
        continuous: Boolean,
        dark: Boolean,
        light: Boolean,
        mandatory: Boolean,
        max: [Number, String],
        multiple: Boolean,
        nextIcon: [Boolean, String],
        prevIcon: [Boolean, String],
        reverse: Boolean,
        showArrows: Boolean,
        showArrowsOnHover: Boolean,
        touch: Object,
        touchless: Boolean,
        value: null,
        vertical: Boolean
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-tabs-slider', {
    props: {
        color: String
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-textarea', {
    props: {
        appendIcon: String,
        appendOuterIcon: String,
        autoGrow: Boolean,
        autofocus: Boolean,
        backgroundColor: String,
        clearIcon: String,
        clearable: Boolean,
        color: String,
        counter: [Boolean, Number, String],
        counterValue: Function,
        dark: Boolean,
        dense: Boolean,
        disabled: Boolean,
        error: Boolean,
        errorCount: [Number, String],
        errorMessages: [String, Array],
        filled: Boolean,
        flat: Boolean,
        fullWidth: Boolean,
        height: [Number, String],
        hideDetails: [Boolean, String],
        hint: String,
        id: String,
        label: String,
        light: Boolean,
        loaderHeight: [Number, String],
        loading: [Boolean, String],
        messages: [String, Array],
        noResize: Boolean,
        outlined: Boolean,
        persistentHint: Boolean,
        placeholder: String,
        prefix: String,
        prependIcon: String,
        prependInnerIcon: String,
        readonly: Boolean,
        reverse: Boolean,
        rounded: Boolean,
        rowHeight: [Number, String],
        rows: [Number, String],
        rules: Array,
        shaped: Boolean,
        singleLine: Boolean,
        solo: Boolean,
        soloInverted: Boolean,
        success: Boolean,
        successMessages: [String, Array],
        suffix: String,
        type: String,
        validateOnBlur: Boolean,
        value: null
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-text-field', {
    props: {
        appendIcon: String,
        appendOuterIcon: String,
        autofocus: Boolean,
        backgroundColor: String,
        clearIcon: String,
        clearable: Boolean,
        color: String,
        counter: [Boolean, Number, String],
        counterValue: Function,
        dark: Boolean,
        dense: Boolean,
        disabled: Boolean,
        error: Boolean,
        errorCount: [Number, String],
        errorMessages: [String, Array],
        filled: Boolean,
        flat: Boolean,
        fullWidth: Boolean,
        height: [Number, String],
        hideDetails: [Boolean, String],
        hint: String,
        id: String,
        label: String,
        light: Boolean,
        loaderHeight: [Number, String],
        loading: [Boolean, String],
        messages: [String, Array],
        outlined: Boolean,
        persistentHint: Boolean,
        placeholder: String,
        prefix: String,
        prependIcon: String,
        prependInnerIcon: String,
        readonly: Boolean,
        reverse: Boolean,
        rounded: Boolean,
        rules: Array,
        shaped: Boolean,
        singleLine: Boolean,
        solo: Boolean,
        soloInverted: Boolean,
        success: Boolean,
        successMessages: [String, Array],
        suffix: String,
        type: String,
        validateOnBlur: Boolean,
        value: null
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-theme-provider', {
    props: {
        dark: Boolean,
        light: Boolean,
        root: Boolean
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-timeline', {
    props: {
        alignTop: Boolean,
        dark: Boolean,
        dense: Boolean,
        light: Boolean,
        reverse: Boolean
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-timeline-item', {
    props: {
        color: String,
        dark: Boolean,
        fillDot: Boolean,
        hideDot: Boolean,
        icon: String,
        iconColor: String,
        large: Boolean,
        left: Boolean,
        light: Boolean,
        right: Boolean,
        small: Boolean
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-time-picker', {
    props: {
        allowedHours: [Function, Array],
        allowedMinutes: [Function, Array],
        allowedSeconds: [Function, Array],
        ampmInTitle: Boolean,
        color: String,
        dark: Boolean,
        disabled: Boolean,
        format: String,
        fullWidth: Boolean,
        headerColor: String,
        landscape: Boolean,
        light: Boolean,
        max: String,
        min: String,
        noTitle: Boolean,
        readonly: Boolean,
        scrollable: Boolean,
        useSeconds: Boolean,
        value: null,
        width: [Number, String]
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-time-picker-clock', {
    props: {
        allowedValues: Function,
        ampm: Boolean,
        color: String,
        dark: Boolean,
        disabled: Boolean,
        double: Boolean,
        format: Function,
        light: Boolean,
        max: Number,
        min: Number,
        readonly: Boolean,
        rotate: Number,
        scrollable: Boolean,
        step: Number,
        value: Number
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-time-picker-title', {
    props: {
        ampm: Boolean,
        ampmReadonly: Boolean,
        color: String,
        disabled: Boolean,
        hour: Number,
        minute: Number,
        period: String,
        readonly: Boolean,
        second: Number,
        selecting: Number,
        useSeconds: Boolean
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-toolbar', {
    props: {
        absolute: Boolean,
        bottom: Boolean,
        collapse: Boolean,
        color: String,
        dark: Boolean,
        dense: Boolean,
        elevation: [Number, String],
        extended: Boolean,
        extensionHeight: [Number, String],
        flat: Boolean,
        floating: Boolean,
        height: [Number, String],
        light: Boolean,
        maxHeight: [Number, String],
        maxWidth: [Number, String],
        minHeight: [Number, String],
        minWidth: [Number, String],
        prominent: Boolean,
        short: Boolean,
        src: [String, Object],
        tag: String,
        tile: Boolean,
        width: [Number, String]
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-toolbar-items', {})
// noinspection JSUnresolvedFunction
Vue.component('v-toolbar-title', {})
// noinspection JSUnresolvedFunction
Vue.component('v-tooltip', {
    props: {
        absolute: Boolean,
        activator: null,
        allowOverflow: Boolean,
        attach: null,
        bottom: Boolean,
        closeDelay: [Number, String],
        color: String,
        contentClass: String,
        dark: Boolean,
        disabled: Boolean,
        eager: Boolean,
        fixed: Boolean,
        internalActivator: Boolean,
        left: Boolean,
        light: Boolean,
        maxWidth: [Number, String],
        minWidth: [Number, String],
        nudgeBottom: [Number, String],
        nudgeLeft: [Number, String],
        nudgeRight: [Number, String],
        nudgeTop: [Number, String],
        nudgeWidth: [Number, String],
        offsetOverflow: Boolean,
        openDelay: [Number, String],
        openOnClick: Boolean,
        openOnHover: Boolean,
        positionX: Number,
        positionY: Number,
        right: Boolean,
        tag: String,
        top: Boolean,
        transition: String,
        value: null,
        zIndex: null
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-treeview', {
    props: {
        activatable: Boolean,
        active: Array,
        activeClass: String,
        color: String,
        dark: Boolean,
        dense: Boolean,
        expandIcon: String,
        filter: Function,
        hoverable: Boolean,
        indeterminateIcon: String,
        itemChildren: String,
        itemDisabled: String,
        itemKey: String,
        itemText: String,
        items: Array,
        light: Boolean,
        loadChildren: Function,
        loadingIcon: String,
        multipleActive: Boolean,
        offIcon: String,
        onIcon: String,
        open: Array,
        openAll: Boolean,
        openOnClick: Boolean,
        returnObject: Boolean,
        rounded: Boolean,
        search: String,
        selectable: Boolean,
        selectedColor: String,
        selectionType: String,
        shaped: Boolean,
        transition: Boolean,
        value: Array
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-treeview-node', {
    props: {
        activatable: Boolean,
        activeClass: String,
        color: String,
        expandIcon: String,
        indeterminateIcon: String,
        item: Object,
        itemChildren: String,
        itemDisabled: String,
        itemKey: String,
        itemText: String,
        level: Number,
        loadChildren: Function,
        loadingIcon: String,
        offIcon: String,
        onIcon: String,
        openOnClick: Boolean,
        rounded: Boolean,
        selectable: Boolean,
        selectedColor: String,
        shaped: Boolean,
        transition: Boolean
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-window', {
    props: {
        activeClass: String,
        continuous: Boolean,
        dark: Boolean,
        light: Boolean,
        mandatory: Boolean,
        max: [Number, String],
        multiple: Boolean,
        nextIcon: [Boolean, String],
        prevIcon: [Boolean, String],
        reverse: Boolean,
        showArrows: Boolean,
        showArrowsOnHover: Boolean,
        touch: Object,
        touchless: Boolean,
        value: null,
        vertical: Boolean
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-window-item', {
    props: {
        activeClass: String,
        disabled: Boolean,
        eager: Boolean,
        reverseTransition: [Boolean, String],
        transition: [Boolean, String],
        value: null
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-carousel-transition', {
    props: {
        group: Boolean,
        hideOnLeave: Boolean,
        leaveAbsolute: Boolean,
        mode: String,
        origin: String
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-carousel-reverse-transition', {
    props: {
        group: Boolean,
        hideOnLeave: Boolean,
        leaveAbsolute: Boolean,
        mode: String,
        origin: String
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-tab-transition', {
    props: {
        group: Boolean,
        hideOnLeave: Boolean,
        leaveAbsolute: Boolean,
        mode: String,
        origin: String
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-tab-reverse-transition', {
    props: {
        group: Boolean,
        hideOnLeave: Boolean,
        leaveAbsolute: Boolean,
        mode: String,
        origin: String
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-menu-transition', {
    props: {
        group: Boolean,
        hideOnLeave: Boolean,
        leaveAbsolute: Boolean,
        mode: String,
        origin: String
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-fab-transition', {
    props: {
        group: Boolean,
        hideOnLeave: Boolean,
        leaveAbsolute: Boolean,
        mode: String,
        origin: String
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-dialog-transition', {
    props: {
        group: Boolean,
        hideOnLeave: Boolean,
        leaveAbsolute: Boolean,
        mode: String,
        origin: String
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-dialog-bottom-transition', {
    props: {
        group: Boolean,
        hideOnLeave: Boolean,
        leaveAbsolute: Boolean,
        mode: String,
        origin: String
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-fade-transition', {
    props: {
        group: Boolean,
        hideOnLeave: Boolean,
        leaveAbsolute: Boolean,
        mode: String,
        origin: String
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-scale-transition', {
    props: {
        group: Boolean,
        hideOnLeave: Boolean,
        leaveAbsolute: Boolean,
        mode: String,
        origin: String
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-scroll-x-transition', {
    props: {
        group: Boolean,
        hideOnLeave: Boolean,
        leaveAbsolute: Boolean,
        mode: String,
        origin: String
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-scroll-x-reverse-transition', {
    props: {
        group: Boolean,
        hideOnLeave: Boolean,
        leaveAbsolute: Boolean,
        mode: String,
        origin: String
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-scroll-y-transition', {
    props: {
        group: Boolean,
        hideOnLeave: Boolean,
        leaveAbsolute: Boolean,
        mode: String,
        origin: String
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-scroll-y-reverse-transition', {
    props: {
        group: Boolean,
        hideOnLeave: Boolean,
        leaveAbsolute: Boolean,
        mode: String,
        origin: String
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-slide-x-transition', {
    props: {
        group: Boolean,
        hideOnLeave: Boolean,
        leaveAbsolute: Boolean,
        mode: String,
        origin: String
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-slide-x-reverse-transition', {
    props: {
        group: Boolean,
        hideOnLeave: Boolean,
        leaveAbsolute: Boolean,
        mode: String,
        origin: String
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-slide-y-transition', {
    props: {
        group: Boolean,
        hideOnLeave: Boolean,
        leaveAbsolute: Boolean,
        mode: String,
        origin: String
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-slide-y-reverse-transition', {
    props: {
        group: Boolean,
        hideOnLeave: Boolean,
        leaveAbsolute: Boolean,
        mode: String,
        origin: String
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-expand-transition', {
    props: {
        mode: String
    }
})
// noinspection JSUnresolvedFunction
Vue.component('v-expand-x-transition', {
    props: {
        mode: String
    }
})